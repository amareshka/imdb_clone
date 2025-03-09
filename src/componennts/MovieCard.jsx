function MovieCard( id,title,poster){
    return(
        <div key={id} className="bg-cover bg-center w-[150px] m-2 h-[40vh] rounded-xl flex items-end hover:scale-[1.1] hover:cursor-pointer duration-300" style={{backgroundImage: `${poster}` }}>
            <div className="p-2 bg-red text-center w-full text-white">{title}</div>
        </div>
    )
}
 
export default MovieCard