function MovieCard(id,name,poster){
    return(
        <div key={id} id='movie-`${id}`' className="bg-cover bg-center w-[180px] m-2 h-[40vh] rounded-xl border flex items-end hover:scale-[1.1] hover:cursor-pointer duration-300" style={{backgroundImage: `url(https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF1000,1000_QL80_.jpg)` }}>
            <div className="p-2 bg-gray text-center w-full text-white">{name}{poster}</div>
        </div>
    )
}
 
export default MovieCard