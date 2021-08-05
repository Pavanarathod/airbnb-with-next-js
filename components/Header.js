import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 py-5 px-5 z-50 grid grid-cols-3 bg-white shadow-md">
      <div className="relative flex items-center h-10 cursor-pointer my-auto md:px-10">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2">
        <input
          type="text"
          placeholder="Start you'r search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500 placeholder-red-400"
        />
        <SearchIcon className="h-8 hidden md:inline-flex p-2 mr-2 cursor-pointer text-white bg-red-400 rounded-full" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <p className="hidden md:inline-block font-bold">Become Host</p>
        <GlobeAltIcon className="h-5" />
        <div className="flex items-center border border-gray-300 p-3 space-x-2 rounded-full shadow-md">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
