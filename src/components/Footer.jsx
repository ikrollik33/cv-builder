export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-accent-light py-5">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-7">
        <p className="text-xl">
          Copyright © {new Date().getFullYear()} CV Builder
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-github bg-contain bg-no-repeat bg-center hover:opacity-70 transition-all duration-200 ease-in-out cursor-pointer"
        />
      </div>
    </footer>
  )
}
