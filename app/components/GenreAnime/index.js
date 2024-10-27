import React, { useState, useEffect } from 'react';

const GenreAnime = () => {
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch('https://api.jikan.moe/v4/genres/anime');
                const data = await response.json();
                if (data && data.data) {
                    setGenres(data.data); // Ambil data genre
                } else {
                    console.error('Data not found in response:', data);
                }
            } catch (error) {
                console.error('Error fetching genres:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchGenres();
    }, []);

    // Handle loading state
    if (loading) {
        return <div>Loading...</div>; // Tampilkan loading jika masih loading
    }

    // Handle case when no genres are found
    if (genres.length === 0) {
        return <div>No genres found.</div>; 
    }

    return (
        <div>
            <ul className="grid grid-cols-2 md:grid-cols-2 gap-2 mt-2">
                {genres.slice(0, 8).map((genre) => ( // Mengambil hanya 8 genre
                    <li key={genre.mal_id} className="cursor-pointer">
                        <a 
                            href={`/view2/${genre.name.toLowerCase()}`} 
                            target="_blank" 
                            className="block text-lg bg-gray-500 p-2 rounded hover:bg-gray-600 transition"
                        >
                            {genre.name} ({genre.count}) {/* Menampilkan jumlah anime dalam genre */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreAnime;
