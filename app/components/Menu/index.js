import React, { useState } from 'react';

const MenuDesktop = () => {
  return (
    <div className="bg-primary w-[270px] h-screen hidden md:flex items-center justify-center">
      <a
        href="#"
        className="inline-block w-24 h-8 border border-gray-300 rounded-md text-center leading-8 text-black no-underline hover:bg-gray-200"
      >
        Menu Desu
      </a>
    </div>
  );
};

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled"); // Cek apakah fungsi ini dipanggil
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center bg-primary h-screen md:hidden">
      <button
        onClick={toggleMenu}
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700"
        type="button"
      >
        Open Menu
      </button>

      {isOpen && (
        <ul
          role="menu"
          className="absolute z-20 min-w-[180px] mt-2 overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg"
        >
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100"
          >
            Menu Item 1
          </li>
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100"
          >
            Menu Item 2
          </li>
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100"
          >
            Menu Item 3
          </li>
        </ul>
      )}
    </div>
  );
};

const Menus = () => {
  return (
    <div>
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
};

export default Menus;

