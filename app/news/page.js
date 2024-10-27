"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Impor uuidv4
import News from "@/app/components/AnimeList/news.js";

const NEWS = () => {
  const [latestAnimeData, setLatestAnimeData] = useState([]);
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

        const latestAnimePromises = anime.data
          .slice(0, 1) // Ambil hanya 1 anime untuk berita
          .map(async (data) => {
            try {
              const newsResponse = await axios.get(
                `https://api.jikan.moe/v4/anime/${data.mal_id}/news`
              );
              return newsResponse.data.data.slice(0, 20);
            } catch (err) {
              console.error("Error fetching news:", err);
              return null;
            }
          });

        const latestAnimeResults = await Promise.all(latestAnimePromises);
        setLatestAnimeData(latestAnimeResults.filter((data) => data !== null));
      } catch (err) {
        setError(`Terjadi kesalahan saat mengambil data: ${err.message}`);
      } finally {
        setShowLoading(false); // Menghilangkan loading setelah pengambilan data selesai
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
        <div className="kotak flex flex-wrap gap-4 p-4">
          <section>
            <News animeData={latestAnimeData} />
          </section>
        </div>
      )}
    </>
  );
};

export default NEWS;
