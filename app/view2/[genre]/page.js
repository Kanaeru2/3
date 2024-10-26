"use client"; // Jika Anda menggunakan React Server Components

import React from 'react';

const GenrePage = ({ params }) => {
    const { genre } = params; // Ambil genre dari params

    return (
        <div>
            <h1>Genre: {genre}</h1>
            {/* Tambahkan konten berdasarkan genre di sini */}
        </div>
    );
};

export default GenrePage;
