import { useEffect, useState } from "react";

function WatchList({ watchlist, setwatchlist, handleRemoveFromWatchList }) {
    const [search, setSearch] = useState("");
    const [genreList, setGenreList] = useState(["All Genre"]);
    const [currentGenre, setCurrentGenre] = useState("All Genre");

    useEffect(() => {
        let tempGenreList = watchlist.map((watchItem) => {
            return watchItem.genre[0];
        });
        tempGenreList = new Set(tempGenreList);

        setGenreList(["All Genre", ...tempGenreList]);
    }, [watchlist]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = (genre) => {
        setCurrentGenre(genre);
    };

    const handleSortAscending = () => {
        let moviesInAscendingOrder = watchlist.sort((movieA, movieB) => {
            return movieA.rating > movieB.rating ? 1 : -1;
        });
        setwatchlist([...moviesInAscendingOrder]);
    };

    const handleSortDescending = () => {
        let moviesInDescendingOrder = watchlist.sort((movieA, movieB) => {
            return movieB.rating < movieA.rating ? -1 : 1;
        });
        setwatchlist([...moviesInDescendingOrder]);
    };

    useEffect(() => { }, [watchlist]);

    return (
        <>
            <div className="flex justify-center text-center my-4">
                {genreList.map((genre, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleFilter(genre)}
                            className={
                                currentGenre == genre
                                    ? "bg-blue-500 mx-4 p-2 rounded-lg font-bold text-white hover:cursor-pointer"
                                    : "bg-gray-500/60 mx-4 p-2 rounded-lg hover:cursor-pointer"
                            }
                        >
                            {genre}
                        </div>
                    );
                })}
            </div>

            <div className="m-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="p-2 rounded-lg outline-none border bg-gray-200"
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            <div className="border rounded-xl m-8">
                <table className="w-full text-gray-500 text-center border-collapse border-gray-400">
                    <thead className="border-b-2 border-gray h-[40px]">
                        <tr>
                            <th>Movie</th>
                            <th className="flex items-center">
                                <div
                                    className="p-2 hover:cursor-pointer"
                                    onClick={handleSortAscending}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-arrow-up"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                                        />
                                    </svg>
                                </div>
                                <div>Rating</div>
                                <div
                                    className="p-2 hover:cursor-pointer"
                                    onClick={handleSortDescending}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-arrow-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                                        />
                                    </svg>
                                </div>
                            </th>
                            <th>Genre</th>
                            <th>Box Office</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlist
                            .filter((movieObj) => {
                                if (currentGenre == "All Genre") {
                                    return true;
                                } else {
                                    return movieObj.genre[0] == currentGenre;
                                }
                            })
                            .filter((movieObj) => {
                                return movieObj.title
                                    .toLowerCase()
                                    .includes(search.toLowerCase());
                            })
                            .map((watchItem, index) => {
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
                                        <td>{watchItem.genre[0]}</td>
                                        <td>{watchItem.boxOffice}</td>
                                        <td>
                                            <span
                                                onClick={() => handleRemoveFromWatchList(watchItem)}
                                                className="text-red-900/80 px-4 font-bold hover:cursor-pointer"
                                            >
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
