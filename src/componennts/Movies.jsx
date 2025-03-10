import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios";

function Movies() {
  const [moviesArr, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await axios.get("https://api.allorigins.win/get?url=https://freetestapi.com/api/v1/movies");
      const moviesJson = JSON.parse(moviesData?.data.contents);
     
      setMovies(moviesJson)
    };
    fetchMoviesData();
  }, []);

  return (
    <>
      <div className="text-xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {console.log(moviesArr)}
        {moviesArr.map((movie, index) => {
          return <MovieCard key={index} name={movie.title} poster={movie.poster} />
        })}

      </div>
    </>
  )
}

export default Movies