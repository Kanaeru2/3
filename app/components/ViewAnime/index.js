// components/ViewAnime/index.js

import React from 'react';

const ViewAnime = ({ animeData }) => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    background: `url(${animeData.background}) no-repeat center center/cover`,
    borderRadius: '8px',
    color: 'white',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    margin: '10px 0',
  };

  const imgStyle = {
    maxWidth: '100%',
    borderRadius: '8px',
    display: 'block',
    margin: '0 auto',
  };

  const detailsStyle = {
    marginTop: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '10px',
    borderRadius: '8px',
  };

  const trailerContainerStyle = {
    marginBottom: '20px',
  };

  const headerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      {animeData.trailer && (
        <div style={trailerContainerStyle}>
          <h2>Trailer</h2>
          <iframe
            width="100%"
            height="315"
            src={animeData.trailer.embed_url}
            title={`${animeData.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div style={headerContainerStyle}>
        <h1 style={titleStyle}>{animeData.title}</h1>
        <img src={animeData.images.jpg.large_image_url} alt={animeData.title} style={imgStyle} />
      </div>

      <div style={detailsStyle}>
        <p><strong>Genres:</strong> {animeData.genres.map(genre => <a href={genre.url} key={genre.mal_id} style={{ color: 'lightblue' }}>{genre.name}</a>).reduce((prev, curr) => [prev, ', ', curr])}</p>
        <p><strong>Rating:</strong> {animeData.rating}</p>
        <p><strong>Duration:</strong> {animeData.duration}</p>
        <p><strong>Status:</strong> {animeData.status}</p>
        <p><strong>Aired:</strong> {animeData.aired.string}</p>
        <p><strong>Synopsis:</strong> {animeData.synopsis}</p>
        <p><strong>Studios:</strong> {animeData.studios.map(studio => <a href={studio.url} key={studio.mal_id} style={{ color: 'lightblue' }}>{studio.name}</a>).reduce((prev, curr) => [prev, ', ', curr])}</p>
        <p><strong>Score:</strong> {animeData.score} ({animeData.scored_by} votes)</p>
        <p><strong>Favorites:</strong> {animeData.favorites}</p>
      </div>
    </div>
  );
};

export default ViewAnime;
