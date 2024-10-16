import axios from "axios";
import AnimeList from "@/app/components/AnimeList/topAnime"; // Sesuaikan dengan lokasi file AnimeList

const SearchPage = async ({ searchParams }) => {
  const query = searchParams.query || ""; // Ambil query dari URL
  let animeData = [];

  if (query) {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${query}`
      );
      animeData = response.data.data; // Ambil data anime dari respons
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }
  }

  return (
    <div className="p-4">
      {animeData.length > 0 ? (
        <div className="kotak grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {animeData.map((anime) => (
            <AnimeList
              key={anime.mal_id}
              title={anime.title}
              images={anime.images.webp.image_url}
              id={anime.mal_id}
              uuid={anime.uuid}
            />
          ))}
        </div>
      ) : (
        <div className="relative h-screen">
          {/* Konten lainnya di sini */}

          <div className="flex items-center justify-center h-screen">
            <p>
              <strong>NOT FOUND!</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
