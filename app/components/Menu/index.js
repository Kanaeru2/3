
"use client";

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
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="fixed bottom-4 right-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700"
        type="button"
      >
        Open Menu
      </button>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 w-[270px] h-screen bg-white border border-slate-200 shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 30 }} // Pastikan menu berada di atas elemen lain
      >
        <button onClick={toggleMenu} className="p-4 text-left text-slate-800">
          Close
        </button>
        <ul className="p-4">
          <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
            Menu Item 1
          </li>
          <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
            Menu Item 2
          </li>
          <li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
            Menu Item 3
          </li>
        </ul>
      </div>
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

