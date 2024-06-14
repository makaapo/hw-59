import React from 'react';
import {Movie} from '../../types';
import MovieItem from '../MovieItem/MovieItem';

interface Props {
  movies: Movie[];
  updateMovie: (id: number, title: string) => void;
  deleteMovie: (id: number) => void;
}

const MovieList: React.FC<Props> = ({movies, updateMovie, deleteMovie}) => {
  return (
    <ul className="movie-list">
      To watch list:
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          updateMovie={updateMovie}
          deleteMovie={deleteMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;