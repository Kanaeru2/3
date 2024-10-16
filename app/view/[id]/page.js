import View from "@/app/components/ViewAnime/index";

const Page = async ({ params, searchParams }) => {
  const { id } = params; // id di sini adalah UUID
  const malId = searchParams.id; // Mengambil mal_id dari query string

  if (!malId) {
    return <p>Anime tidak ditemukan</p>;
  }

  // Mengambil data dari API Jikan menggunakan mal_id
  const response = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
  if (!response.ok) {
    return <p>Data tidak ditemukan</p>;
  }

  const animeData = await response.json(); // Ambil data anime

  return <View animeData={animeData.data} />;
};

export default Page;
