const View = ({ animeData }) => {
  if (!animeData) {
    return <p className="flex justify-center">Data tidak ditemukan.</p>; // Handle case when no data is available
  }

  return (
    <div className="bg-primary p-4 max-w-4xl mx-auto">
      {/* Trailer */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Trailer</h3>
        <iframe
          width="100%" // Make trailer fully responsive
          height="400"
          src={animeData.trailer.embed_url}
          title={`${animeData.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-label={`Trailer for ${animeData.title}`} // Descriptive aria-label for accessibility
        ></iframe>
      </div>

      {/* Gambar dan Detail Anime */}
      <div className="flex flex-col md:flex-row">
        <img
          src={animeData.images.jpg.image_url}
          alt={animeData.title}
          className="rounded-lg mb-4 md:mr-4 w-full max-w-[350px] max-h-[200px] object-cover" // Responsive image
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mt-2">
            <strong>{animeData.title}</strong>
          </h1>
          <h2 className="text-lg text-gray-600">
            {animeData.title_english} ({animeData.title_japanese})
          </h2>
          <p className="mt-2">{animeData.synopsis}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Detail Anime</h3>
            <p>
              <strong>Status:</strong> {animeData.status}
            </p>
            <p>
              <strong>Episodes:</strong> {animeData.episodes}
            </p>
            <p>
              <strong>Duration:</strong> {animeData.duration}
            </p>
            <p>
              <strong>Rating:</strong> {animeData.rating}
            </p>
            <p>
              <strong>Score:</strong> {animeData.score} (Scored by{" "}
              {animeData.scored_by} users)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
