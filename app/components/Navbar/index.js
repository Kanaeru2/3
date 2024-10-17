"use client"; // Menandakan bahwa ini adalah komponen klien
import { useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react"; // Import ikon

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false); // State untuk menampilkan input pencarian

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (query) {
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    }
  };

  return (
    <>
      <nav className="bg-accent" style={{ height: "70px" }}>
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          {/* Judul MyAnimeList */}
          <h1 className="text-black text-2xl">
            <a href="/">MyAnimeList</a>
          </h1>

          {/* Tombol untuk Menampilkan Form Pencarian di Mobile */}
          <button
            onClick={() => setSearchVisible(!searchVisible)}
            className="md:hidden p-2 text-white bg-blue-700 rounded-lg"
          >
            <MagnifyingGlass size={32} />
          </button>

          {/* Form Pencarian untuk Desktop */}
          <div className="hidden md:block relative">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                id="simple-search"
                name="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Cari Anime Apa..."
                required
              />
              <button
                type="submit"
                className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Cari
              </button>
            </form>
          </div>
        </div>

        {/* Form Pencarian untuk Mobile */}
        {searchVisible && (
          <div className="md:hidden fixed top-0 left-0 right-0 p-4 bg-white shadow-lg z-50">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                id="simple-search"
                name="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Cari Anime Apa..."
                required
              />
            <button
              type="button"
              onClick={() => setSearchVisible(false)}
              className="absolute left-5 text-gray-500 hover:text-gray-700">
             <X size={24} />
            </button>

              <button
                type="submit"
                className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Cari
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Overlay untuk mencegah interaksi di luar form pencarian */}
      {searchVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSearchVisible(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
