export default function Footer() {
  return (
    <footer className="border-t py-8 px-8">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Suganthi S. All rights reserved.
        </p>


        <div className="flex gap-6 text-sm">

          <a
            href="linkedin.com/in/suganthisoundararajan"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Suganthisoundar"
            className="hover:text-blue-600"
          >
            GitHub
          </a>

          <a
  href="mailto:suganthisoundars@gmail.com"
  className="hover:text-blue-600"
>
  Email
</a>

        </div>

      </div>

    </footer>
  );
}