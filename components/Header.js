import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [number, setNumber] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const close = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        number,
      },
    });
  };

  return (
    <header className="sticky top-0 py-5 px-5 z-50 grid grid-cols-3 bg-white shadow-md">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto md:px-10"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={`${placeholder || "Start you'r Search"}`}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex justify-between items-center border-b mb-4 ">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests.
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex justify-around">
            <button
              onClick={close}
              className="px-4 py-1  shadow-lg border border-gray-300 hover:bg-red-400 rounded-md hover:text-white text-sm outline-none"
            >
              Cansel
            </button>

            <button
              onClick={search}
              className="border border-blue-300 text-blue-400 hover:bg-blue-400 hover:text-black rounded-md shadow-lg px-4 py-1"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
