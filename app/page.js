"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AnimeList from "@/app/components/AnimeList/topAnime.js";
import News from "@/app/components/AnimeList/news.js";
import Header from "@/app/components/AnimeList/Header";
import Footer from "@/app/components/Footer/index.js";
import NEWS from "@/app/news/page.js";

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  const [latestAnimeData, setLatestAnimeData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    const fetchAnimeData = async () => {
      setLoading(true); // Set loading menjadi true saat mulai fetch data
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
            } catch {
              return null;
            }
          });

        const latestAnimeResults = await Promise.all(latestAnimePromises);
        setLatestAnimeData(latestAnimeResults.filter((data) => data !== null));
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data");
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
    <div>
      <div className="flex flex-wrap gap-2 p-2">
        <section>
          <div className="kotak">
            <Header
              title="Paling Populer"
              linkTitle="Lihat Semua"
              linkHref="/populer"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
