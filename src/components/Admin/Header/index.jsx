import React, { useState } from "react";

const AdminHeader = () => {
  const [activeTab, setActiveTab] = useState("Collections");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = ["Collections", "Arts", "Space", "Game", "Utility", "Cards"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClick = (tab) => {
    setActiveTab(tab);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-white rounded shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <svg
                className="cursor-pointer"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 17H0H1Z..." fill="#1F2937" />
              </svg>
              <h2 className="font-normal text-2xl leading-6 text-gray-800">
                OvonRueden
              </h2>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-auto space-x-2">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded cursor-pointer ${
                    activeTab === tab
                      ? "text-white bg-indigo-600"
                      : "text-gray-600 border border-white bg-gray-50"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex space-x-5 justify-center items-center pl-2">
              <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15C21 15.5304 ..."
                    stroke="#1F2937"
                    strokeWidth="1.5"
                  />
                </svg>
                <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
              </div>

              <svg
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 8C18 6.4087 ..."
                  stroke="#1F2937"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="block md:hidden w-full mt-5">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full"
            >
              <div className="flex space-x-2">
                <span
                  className={`font-semibold text-sm leading-3 ${
                    activeTab === "Collections" ? "hidden" : ""
                  }`}
                >
                  Selected:{" "}
                </span>
                <p className="font-normal text-sm leading-3">{activeTab}</p>
              </div>
              <svg
                className={`${dropdownOpen ? "rotate-180" : ""}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {dropdownOpen && (
              <ul className="font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md z-10 bg-white">
                {tabs
                  .filter((tab) => tab !== activeTab)
                  .map((tab) => (
                    <li
                      key={tab}
                      onClick={() => handleDropdownClick(tab)}
                      className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                    >
                      {tab}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
