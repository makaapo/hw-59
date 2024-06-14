import {useEffect, useState} from 'react';
import JokeButton from '../../components/JokeButton/JokeButton';
import './Joke.css';

const url = 'https://api.chucknorris.io/jokes/random';
const JokeApp = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setJoke(data.value);
    }
  };

  useEffect(() => {
    void fetchJoke();
  }, []);

  return (
    <div className="JokeApp">
      <p><b>Chuck Norris facts:</b> {joke}</p>
      <JokeButton fetchJoke={fetchJoke}/>
    </div>
  );
};

export default JokeApp;
