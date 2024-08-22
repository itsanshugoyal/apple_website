import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full py-5 sm:px-10 px-5">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {["Phone", "Macbook", "Tablets"].map((navItem) => (
            <div key={navItem} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search icon" width={18} height={18} />
          <img src={bagImg} alt="bag icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
