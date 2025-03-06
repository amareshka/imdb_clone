import HomeBanner from "./componennts/HomeBanner"
import Movies from "./componennts/Movies"
import Navbar from "./componennts/Navbar"
import WatchList from "./componennts/WatchList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HomeBanner /><Movies /></>}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
