import React, {useState} from 'react';
import MovieList from '../../components/MovieList/MovieList';
import MovieInput from '../../components/MovieInput/MovieInput';
import {Movie} from '../../types';
import './MoviesTrack.css';

const MoviesTrack: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (title: string) => {
    setMovies(prev => [...prev, {id: Math.random(), title}]);
  };

  const updateMovie = (id: number, title: string) => {
    setMovies(prev => prev.map(movie => movie.id === id ? {...movie, title} : movie));
  };

  const deleteMovie = (id: number) => {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  };

  return (
    <div className="Movie">
      <h1>Movies tracking</h1>
      <MovieInput addMovie={addMovie}/>
      <MovieList movies={movies} updateMovie={updateMovie} deleteMovie={deleteMovie}/>
    </div>
  );
};

export default MoviesTrack;