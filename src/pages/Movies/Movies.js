import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import s from './Movies.module.css';
const Movies = () => {
  const [movies, setMovies] = useState(null);

  const apiURL =
    'https://kinopoiskapiunofficial.tech/api/v2.2/films?page=2&perpage=20';
  console.log(movies);

  const fetchData = async () => {
    const response = await axios.get(apiURL, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'd91990ad-2c49-44f0-a1a1-954c40216a5c',
        'Content-Type': 'application/json',
      },
    });
    setMovies(response.data.items);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ul className={s.moviesList}>
        {movies ? (
          movies.map((e) => (
            <li className={s.movie} key={e.kinopoiskId}>
              <h3 className={s.movieTitle}>
                {e.nameRu ? e.nameRu : e.nameOriginal}
              </h3>
              <ul className={s.catigoriesList}>
                {e.genres && e.genres.map((el) => <li>{el.genre}</li>)}
              </ul>
              <img
                src={e.posterUrlPreview}
                alt={e.nameRu}
                width="250px"
                height="375px"
              />
              <p>ratingImdb: {e.ratingImdb}</p>
              <p>ratingKinopoisk: {e.ratingKinopoisk}</p>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
};

export default Movies;
