import React from 'react';

interface Props {
  fetchJoke: () => Promise<void>;
}

const JokeButton: React.FC<Props> = React.memo(({fetchJoke}) => {
  return (
    <button onClick={fetchJoke}>New joke</button>
  );
});

export default JokeButton;
