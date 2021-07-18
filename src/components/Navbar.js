/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-12">
      <div className="w-full text-2xl font-extrabold">sunnyside</div>
      <div className="gap-4 hidden md:flex">
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="relative md:hidden">
        <input type="checkbox" id="sortbox" className="hidden absolute" />
        <label
          htmlFor="sortbox"
          className="flex items-center space-x-1 cursor-pointer"
        >
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </label>

        <div
          id="sortboxmenu"
          className="absolute px-20 py-8 right-1 shadow  opacity-0 bg-white transition delay-75 ease-in-out z-10"
        >
          <ul className="block text-center text-display-veryDarkGrayishBlue">
            <li>
              <a href="#" className="block px-3 pb-3 hover:bg-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-3 hover:bg-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-3 hover:bg-gray-200">
                Projects
              </a>
            </li>
            <li className="py-4">
              <button
                className="rounder bg-display-yellow                 text-black
                font-text uppercase rounded-full px-2"
              >
                <a href="#" className="block px-3 py-3 hover:bg-gray-200">
                  Contact
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
