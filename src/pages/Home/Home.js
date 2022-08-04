import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmList/FilmList';
import { getPoPMovies } from 'ServiceApi/service';

export default function Home() {
  const [popMovieList, setPopMovies] = useState([]);

  useEffect(() => {
    getPoPMovies().then(data => {
      setPopMovies(data.results);
    });
  }, []);

  return <FilmList filmList={popMovieList} />;
}
