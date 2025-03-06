import HomeBanner from "./HomeBanner"
import MovieCard from "./MovieCard"

function Movies() {
    return (
        <>
        <div className="text-xl font-bold text-center m-5">Trending Movies</div>
        <div className="flex flex-row">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/> 
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
        </>
    )
}

export default Movies