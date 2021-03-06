import Image from "next/image";
export default function Header(props) {
  return (
    <header>
      <nav className="bg-white shadow">
        <div className="container px-6 py-3 mx-auto ">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  href="/"
                  className="text-xl font-bold text-gray-800 hover:text-gray-700 md:text-2xl"
                >
                  <Image
                    className="w-full"
                    src="https://i.ibb.co/fXhktjy/Image-from-i-OS.jpg"
                    alt="Tiger"
                    width={100}
                    height={100}
                  />
                </a>
              </div>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden -mx-4 md:flex md:items-center">
              <a
                href="/whiteboard"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
              >
                Whiteboard
              </a>
              <a
                href="/replit"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
              >
                
                Code Editor{" "}
                
              </a>
              <a
                href="/"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
              >
                Problems{" "}
              </a>
              {/* <a href="/Board" className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600">Board </a> */}
              <a
                href="/Contact"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize md:mt-0 hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
