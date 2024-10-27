"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AnimeList from "@/app/components/AnimeList/topAnime.js";
import News from "@/app/components/AnimeList/news.js";
import Header from "@/app/components/AnimeList/Header";
import Footer from "@/app/components/Footer/index.js";

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [latestAnimeData, setLatestAnimeData] = useState([]);
  const [error, setError] = useState(null);
  const [showLoading, setShowLoading] = useState(true); // Untuk mengontrol tampilan loading

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/top/anime?limit=10"
        );
        const anime = response.data;

        if (!anime || !anime.data || anime.data.length === 0) {
          setError("Tidak ada data anime yang tersedia");
          return;
        }

        const animeDataWithUUID = anime.data.map((data) => ({
          ...data,
          uuid: uuidv4(),
        }));

        setAnimeData(animeDataWithUUID);

        const latestAnimePromises = animeDataWithUUID
          .slice(0, 1)
          .map(async (data) => {
            try {
              const newsResponse = await axios.get(
                `https://api.jikan.moe/v4/anime/${data.mal_id}/news`
              );
              return newsResponse.data.data.slice(0, 2);
            } catch (error) {
              console.error("Gagal mengambil berita:", error);
              return null;
            }
          });

        const latestAnimeResults = await Promise.all(latestAnimePromises);
        setLatestAnimeData(latestAnimeResults.filter((data) => data !== null));
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data");
        console.error("Kesalahan saat mengambil data:", err);
      } finally {
        // Mengatur waktu tampilan loading sebelum menampilkan data
        setTimeout(() => {
          setShowLoading(false);
        }, 4000); // Menampilkan loading selama 4 detik
      }
    };

    fetchAnimeData();
  }, []);

  if (error) {
    return <p className="text-center">{error}</p>; // Menangani kesalahan
  }

  return (
    <div>
      <style jsx>{`
        .loading-spinner {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #fff;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto; /* Center spinner */
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="flex flex-wrap gap-2 p-2">
        <section>
          <div className="kotak">
            <Header
              title="Paling Populer"
              linkTitle="Lihat Semua"
              linkHref="/populer"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {showLoading ? (
                <div className="loading-spinner"></div> // Gaya loading spinner
              ) : (
                animeData.map((data) => (
                  <AnimeList
                    key={data.uuid}
                    title={data.title}
                    images={data.images.webp.image_url}
                    uuid={data.uuid}
                    id={data.mal_id}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="kotak flex flex-wrap gap-4 p-4">
        <section>
          <Header title="NEWS" linkTitle="Lihat Semua" linkHref="/news" />
          <News animeData={latestAnimeData} />
        </section>
      </div>
    </div>
  );
};

export default Home;
