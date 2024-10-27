'use client';
import React, { useState, useEffect } from 'react';
import GenreAnime from '../GenreAnime'; 

const Menus = () => {
    const [isOpen, setIsOpen] = useState(false); // Untuk menu mobile
    const [genres, setGenres] = useState([]); // Untuk menyimpan genre

    // Ambil genre dari API
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.jikan.moe/v4/genres/anime'); // Endpoint untuk genre
                const data = await response.json();
                setGenres(data.data); // Menyimpan data genre
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    // Menu Desktop
    const MenuDesktop = () => (
        <div className="bg-primary w-[270px] h-screen hidden md:flex flex-col items-start p-4 border-b border-gray-700">
            <h2 className="text-black mb-4 text-lg font-bold p-2 rounded">Menu</h2>
            <div className="border-t border-gray-300 w-full mb-4" />
            <h3 className="text-black mb-2 text-md font-bold">Genre</h3>
            <div className="overflow-y-auto max-h-[60vh] w-full"> {/* Scrollable Genre List */}
                <GenreAnime genres={genres} />
            </div>
            <div className="border-b border-gray-600 w-full mt-4" />
            <h3 className="text-black mb-2 text-md font-bold">Popular</h3>
            <ul className="space-y-2">
                <li><a href="/popular" className="text-gray-700 hover:text-gray-900">Popular Anime</a></li>
                <li><a href="/top-rated" className="text-gray-700 hover:text-gray-900">Top Rated Anime</a></li>
                <li><a href="/upcoming" className="text-gray-700 hover:text-gray-900">Upcoming Anime</a></li>
            </ul>
        </div>
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
                <div className="border-t border-gray-600 w-full mb-4" />
                <ul className="p-4 space-y-2">
                    <h2 className="text-black mb-4 text-lg font-bold bg-gray-200 p-2 rounded">Menu</h2>
                    <h3 className="text-black mb-2 text-md font-bold">Genre</h3>
                    <div className="overflow-y-auto max-h-[60vh] w-full"> {/* Scrollable Genre List */}
                        <GenreAnime genres={genres} />
                    </div>
                    <h3 className="text-black mb-2 text-md font-bold">Popular</h3>
                    <li><a href="/popular" className="text-gray-700 hover:text-gray-900">Popular Anime</a></li>
                    <li><a href="/top-rated" className="text-gray-700 hover:text-gray-900">Top Rated Anime</a></li>
                    <li><a href="/upcoming" className="text-gray-700 hover:text-gray-900">Upcoming Anime</a></li>
                </ul>
                <div className="border-b border-gray-600 w-full mt-4" />
            </div>
        </div>
    );

    return (
        <div className="flex">
            <MenuDesktop />
            <MenuMobile />
        </div>
    );
};

export default Menus;
