import { useState } from 'react'
import uniqid from 'uniqid'

export default function PhotoUpload({ data, handleChange, setter }) {
  const [previewUrl, setPreviewUrl] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
        handleChange({ target: { id: uniqid(), value: reader.result } }, setter)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-full text-xl py-2 px-4 rounded-lg"
        type="url"
        id={uniqid()}
        placeholder="Your photo URL"
        value={data}
        onChange={(e) => handleChange(e, setter)}
      />
      <div className="flex items-center gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="photo-upload"
        />
        <label
          htmlFor="photo-upload"
          className="bg-gray-800 text-gray-50 px-4 py-2 rounded-lg cursor-pointer hover:opacity-70 transition-all duration-200"
        >
          Upload Photo
        </label>
      </div>
    </div>
  )
} 