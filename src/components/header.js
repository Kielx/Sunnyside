/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header className="flex  justify-between px-8 py-12">
      <div className="w-full">Sunnyside</div>
      <div className="gap-4 hidden md:flex">
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="relative md:hidden">
        <input type="checkbox" id="sortbox" className="hidden absolute" />
        <label
          for="sortbox"
          className="flex items-center space-x-1 cursor-pointer"
        >
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#000"
              fill-rule="evenodd"
            />
          </svg>
        </label>

        <div
          id="sortboxmenu"
          className="absolute px-10 mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-white border border-gray-400 transition delay-75 ease-in-out z-10"
        >
          <ul className="block text-center text-gray-900">
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                About
              </a>
            </li>
            <li>Services</li>
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:bg-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
