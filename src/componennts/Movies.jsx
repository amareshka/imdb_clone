import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios";

function Movies() {
  const [moviesArr, setMovies] = useState([]);

  //axios.get("https://api.allorigins.win/get?url=https://freetestapi.com/api/v1/movies")
  // useEffect(()=>{
  //   axios.get("https://api.allorigins.win/get?url=https://freetestapi.com/api/v1/movies").then(function(data){
  //     console.log(data.data.contents);
  //     //console.log(data)
  //     setMovies(data.data.contents)
  //   });
  // },[]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await axios.get("https://api.allorigins.win/get?url=https://freetestapi.com/api/v1/movies");
      //const moviesJson = await JSON.stringify(moviesData);
      //console.log(moviesData.data.contents);
      if (moviesData?.data?.contents) {
        setMovies([moviesData]);
      }

    };
    fetchMoviesData();
  }, []);

  // useEffect(() => {
  //   fetch(`https://api.allorigins.win/get?url=https://freetestapi.com/api/v1/movies`)
  //     .then(response => response.json())
  //     .then(response => {  console.log(response.contents)     
  //       setMovies([response.contents])
  //   })
  // },[])




  return (
    <>
      <div className="text-xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">

        {moviesArr.map((movie) => {
          return <MovieCard key={movie.id} name={movie.title} poster={movie.poster} />
        })}

      </div>
    </>
  )
}

export default Movies