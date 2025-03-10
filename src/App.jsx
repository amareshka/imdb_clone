import { useEffect, useState } from "react";
import HomeBanner from "./componennts/HomeBanner";
import Movies from "./componennts/Movies";
import Navbar from "./componennts/Navbar";
import WatchList from "./componennts/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setwatchlist] = useState([]);

  //Add movies to watch list
  const handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    //const newWatchList = watchlist.concat(movieobj);

    setwatchlist(newWatchList);
    console.log("Watchlist: ", newWatchList);
  };

  //Remove a movie from watch list
  const handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    //localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList))
    setwatchlist(filteredWatchList);
    console.log("Filtered Watchlist: ", filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    } else {
      setwatchlist(JSON.parse(moviesFromLocalStorage));
    }
  },[]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeBanner />
              <Movies
                watchlist={watchlist}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        ></Route>
        <Route
          path="/watchlist"
          element={<WatchList watchlist={watchlist} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
