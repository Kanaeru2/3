const News = ({ animeData }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Mengiterasi setiap grup berita berdasarkan anime */}
      {animeData.map((newsGroup, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          {/* Menampilkan ID anime dari grup berita */}
          <h3 className="font-bold text-lg">Anime ID: {newsGroup[0].mal_id}</h3>
          {newsGroup.map((news) => (
            <div key={news.mal_id} className="border-b pb-2 mb-2">
              {/* Menampilkan judul berita */}
              <h4 className="font-semibold">{news.title}</h4>
              <p>
                Ditulis oleh: {/* Menautkan ke profil penulis */}
                <a
                  href={news.author_url}
                  className="text-blue-500 hover:underline"
                >
                  {news.author_username}
                </a>
              </p>
              {/* Menampilkan cuplikan berita */}
              <p>{news.excerpt}</p>
              {news.images.jpg.image_url && (
                // Menampilkan gambar dengan ukuran yang lebih kecil
                <img
                  src={news.images.jpg.image_url}
                  alt={news.title}
                  className="mt-2 rounded max-w-xs h-auto" // Kelas max-w-xs untuk ukuran lebih kecil
                />
              )}
              {/* Menautkan ke berita lengkap */}
              <a href={news.url} className="text-blue-500 hover:underline">
                Baca selengkapnya
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default News;
