"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeList from "@/app/components/AnimeList/topAnime.js";
import { v4 as uuidv4 } from "uuid"; // Import UUID

const Populer = () => {
  const [animeData, setAnimeData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    const fetchAnimeData = async () => {
      setLoading(true); // Set loading menjadi true saat mulai fetch data
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
      } catch (err) {
        setError(`Terjadi kesalahan saat mengambil data: ${err.message}`);
      } finally {
        setLoading(false); // Set loading menjadi false setelah selesai fetch data
      }
    };

    fetchAnimeData();
  }, []);

  if (loading) {
    return <p className="text-center bg-primary">Loading...</p>; // Tampilkan pesan loading
  }

  if (error) {
    return <p className="text-center">{error}</p>; // Menangani kesalahan
  }

  return (
    <>
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
    </>
  );
};

export default Populer;
