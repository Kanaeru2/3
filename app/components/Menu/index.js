'use client';
import React, { useState } from 'react';
import GenreAnime from '../GenreAnime'; // Pastikan path-nya benar

const Menus = () => {
    const [isOpen, setIsOpen] = useState(false); // Untuk menu mobile

    // Menu Desktop
    const MenuDesktop = () => (
        <div className="bg-primary w-[270px] h-screen hidden md:flex flex-col items-start p-4 border-b border-gray-700">
            <h2 className="text-black mb-4 text-lg font-bold p-2 rounded">Genre</h2>
            <div className="border-t border-gray-300 w-full mb-4" /> {/* Border Atas */}
            <GenreAnime /> {/* Menggunakan GenreAnime untuk menampilkan genre */}
            <div className="border-b border-gray-600 w-full mt-4" /> {/* Border Bawah */}
        </div>
        // End genre
    );

    // Menu Mobile
    const MenuMobile = () => (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 rounded-md bg-slate-800 py-2 px-4 text-white"
                type="button"
            >
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            <div
                className={`fixed top-0 right-0 w-[270px] h-screen bg-white border shadow-lg transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <button onClick={() => setIsOpen(false)} className="p-4 text-left text-slate-800">
                    Close
                </button>
                <div className="border-t border-gray-600 w-full mb-4" /> {/* Border Atas */}
                <ul className="p-4 space-y-2">
                    <h2 className="text-black mb-4 text-lg font-bold bg-gray-200 p-2 rounded">Genre</h2>
                    <GenreAnime /> {/* Menggunakan GenreAnime untuk menampilkan genre */}
                </ul>
                <div className="border-b border-gray-600 w-full mt-4" /> {/* Border Bawah */}
            </div>
        </div>
        // End menu mobile
    );

    return (
        <div className="flex">
            <MenuDesktop />
            <MenuMobile />
            {/* Tambahkan konten halaman jika diperlukan */}
        </div>
    );
};

export default Menus;
