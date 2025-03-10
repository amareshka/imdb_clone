function MovieCard({id,name,poster}){
    return(
        <div key={id} className="bg-cover bg-center w-[180px] m-2 h-[40vh] rounded-xl border flex items-end flex-col justify-between hover:scale-[1.1] hover:cursor-pointer duration-300" style={{backgroundImage: `url(${poster})` }}>
            <div className="bg-gray-900/60 p-1 m-2 flex justify-center items-center rounded-lg">&#128525;</div>
            <div className="p-2 bg-gray-900/60 text-center w-full text-white">{name}</div>
        </div>
    )
}
 
export default MovieCard