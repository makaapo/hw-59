import React, {useEffect, useState} from 'react';
import {Movie} from '../../types';

interface Props {
  movie: Movie;
  updateMovie: (id: number, title: string) => void;
  deleteMovie: (id: number) => void;
}

const MovieItem: React.FC<Props> = React.memo(({movie, updateMovie, deleteMovie}) => {
  const [editTitle, setEditTitle] = useState(movie.title);

  useEffect(() => {
    setEditTitle(movie.title);
  }, [movie]);

  const changeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value);
    updateMovie(movie.id, event.target.value);
  };

  return (
    <li className="movie-item">
      <input
        type="text"
        value={editTitle}
        onChange={(changeItem)}
        required
      />
      <button onClick={() => deleteMovie(movie.id)}>X</button>
    </li>
  );
});

export default MovieItem;