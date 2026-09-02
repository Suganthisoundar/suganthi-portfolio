export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-xl font-bold">
          Suganthi
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>

          <a href="#experience" className="hover:text-blue-600">
            Experience
          </a>

          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}