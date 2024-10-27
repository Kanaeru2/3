
import Image from "next/image";

const AnimeList = ({ title, images, uuid, id }) => {
  return (
    <a href={`/view/${uuid}?id=${id}`}
    target="_blank" 
    rel="noopener noreferrer">
      {/* Menggunakan UUID di URL dan mal_id sebagai query */}
      <div className="text-center md:text-left box">
        {/* Container untuk setiap item */}
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden mb-2">
            <Image
              src={images}
              className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 transition-transform transform hover:scale-105"
              width={400}
              height={300}
              alt={title}
            />
          </div>
          <p className="text-sm font-bold">{title}</p>
        </div>
      </div>
    </a>
  );
};

export default AnimeList;
