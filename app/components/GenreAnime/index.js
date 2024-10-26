import React from 'react';

const GenreAnime = () => {
    const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Fantasy"]; // Contoh genre yang lebih banyak

    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-2 gap-2 mt-2">
                {genres.map((genre) => (
                    <li key={genre} className="cursor-pointer">
                        <a 
                            href={`/view2/${genre.toLowerCase()}`} 
                            className="block text-lg bg-gray-500 p-2 rounded hover:bg-gray-600 transition"
                        >
                            {genre}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreAnime;
