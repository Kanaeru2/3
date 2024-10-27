"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import AnimeList from "@/app/components/AnimeList/topAnime.js";

const Populer = () => {
  const [animeData, setAnimeData] = useState([]);
  const [error, setError] = useState(null);
  const [showLoading, setShowLoading] = useState(true); // State untuk kontrol loading

  useEffect(() => {
    const fetchAnimeData = async () => {
      // Tambahkan jeda sebelum pengambilan data
      await new Promise(resolve => setTimeout(resolve, 4000)); // Jeda 4 detik

      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/top/anime?limit=20"
        );
        const anime = response.data;

        if (!anime || !anime.data || anime.data.length === 0) {
          setError("Tidak ada data anime yang tersedia");
          return;
        }

        // Add UUID to each anime item
        const animeWithUUID = anime.data.map((item) => ({
          ...item,
          uuid: uuidv4(), // Generate a unique ID
        }));

        setAnimeData(animeWithUUID); // Set anime data with UUIDs

        // Menghilangkan loading setelah data siap
        setShowLoading(false);
      } catch (err) {
        setError(`Terjadi kesalahan saat mengambil data: ${err.message}`);
      }
    };

    fetchAnimeData();
  }, []);

  if (error) {
    return <p className="text-center">{error}</p>; // Menangani kesalahan
  }

  return (
    <>
      {showLoading ? (
        <p className="text-center bg-primary">Loading...</p> // Spinner loading
      ) : (
        <div className="kotak grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {animeData.map((data) => (
            <AnimeList
              key={data.uuid}
              title={data.title}
              images={data.images.webp.image_url}
              uuid={data.uuid}
              id={data.mal_id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Populer;
