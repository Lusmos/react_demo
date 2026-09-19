import React from 'react'
import star from '../../images/star.png'
import noImage from '../../images/no-image.png'

const MovieCard = ({ movie: { id, title, poster_path, overview, vote_average, release_date, original_language } }) => {
  return(
    <div className="movie-card" key={id}>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noImage}
      alt={title} className="poster"/>
      <div className="title">
        <h3>{title}</h3>
        <div className="movie-content">
            <div className="rating">
                <img src={star} alt="star" className="star"/>
                <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            </div>
            <span>•</span>
            <p className='lang'>{original_language}</p>
            <span>•</span>
            <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard