function WatchList({ watchlist }) {
    //console.log("WatchList from Page: ", watchlist);
    return (
        <>
            <div className="flex justify-center text-center">
                <div className="bg-blue-500 mx-4 p-2 rounded-lg font-bold">Action</div>
                <div className="bg-yellow-800 mx-4 p-2 rounded-lg font-bold">
                    Comedy
                </div>
                <div className="bg-red-800 mx-4 p-2 rounded-lg font-bold">Horror</div>
            </div>

            <div className="m-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="p-2 rounded-lg outline-none border bg-gray-200"
                />
            </div>

            <div className="border rounded-xl m-8">
                <table className="w-full text-gray-500 text-center border-collapse border-gray-400">
                    <thead className="border-b-2 border-gray h-[40px]">
                        <tr>
                            <th>Movie</th>
                            <th>Rating</th>
                            <th>Genre</th>
                            <th>Box Office</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist.map((watchItem, index) => {
                            return (
                                <tr key={index} className="border-b-2">
                                    <td className="flex items-center">
                                        <img
                                            className="w-[80px] m-2"
                                            src={watchItem.poster}
                                            alt={watchItem.title}
                                        />
                                        <p className="mx-4">{watchItem.title}</p>
                                    </td>
                                    <td>{watchItem.rating}</td>
                                    <td>{watchItem.genre.toString()}</td>
                                    <td>{watchItem.boxOffice}</td>
                                    <td>
                                        <span className="text-red-900/80 font-bold hover:cursor-pointer">
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default WatchList;
