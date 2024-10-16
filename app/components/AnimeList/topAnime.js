import Image from "next/image";

const AnimeList = ({ title, images, uuid, id }) => {
  return (
    <a href={`/view/${uuid}?id=${id}`}>
      {/* Menggunakan UUID di URL dan mal_id sebagai query */}
      <div className="text-center md:text-left box">
        {/* Container untuk setiap item */}
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden mb-2">
            <Image
              src={images}
              className="w-32 h-auto transition-transform transform hover:scale-105"
              width={200}
              height={200}
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
