import React, {useState} from 'react';

interface Props {
  addMovie: (title: string) => void;
}

const MovieInput: React.FC<Props> = ({addMovie}) => {
  const [newTitle, setNewTitle] = useState('');

  const onSubmit = () => {
    addMovie(newTitle);
    setNewTitle('');
  };

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  return (
    <div className="add-movie">
      <input
        type="text"
        value={newTitle}
        onChange={(changeMovie)}
        required
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default MovieInput;