function MovieCard(){
    return(
        <div className="bg-cover bg-center w-[200px] m-2 h-[40vh] rounded-xl flex items-end hover:scale-[1.1] hover:cursor-pointer duration-300" style={{backgroundImage: `url(https://rukminim3.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=90&crop=false)`}}>
            <div className="p-2 bg-red text-center w-full text-white">Movie Name</div>
        </div>
    )
}
 
export default MovieCard