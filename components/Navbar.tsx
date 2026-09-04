import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link href="/" className="text-xl font-bold">
          Suganthi
        </Link>

        <div className="hidden md:flex gap-8 text-sm">
          <Link href="/#about" className="hover:text-blue-600">
            About
          </Link>

          <Link href="/#skills" className="hover:text-blue-600">
            Skills
          </Link>

          <Link href="/#experience" className="hover:text-blue-600">
            Experience
          </Link>

          <Link href="/#projects" className="hover:text-blue-600">
            Projects
          </Link>

          <Link href="/projects" className="hover:text-blue-600">
            Client Work
          </Link>

          <Link href="/#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

      </nav>
    </header>
  );
}
