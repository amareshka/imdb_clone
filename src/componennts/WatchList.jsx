function WatchList() {
    return(
       <>

        <div className="flex justify-center text-center">
            <div className="bg-blue-500 mx-4 p-2 rounded-lg font-bold">Action</div>
            <div className="bg-yellow-800 mx-4 p-2 rounded-lg font-bold">Comedy</div>
            <div className="bg-red-800 mx-4 p-2 rounded-lg font-bold">Horror</div>
        </div>

       <div className="m-4 flex justify-center">
            <input type="text" placeholder="Search for movies" className="p-2 rounded-lg outline-none border bg-gray-200"/>
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
                <tr className="border-b-2">
                    <td className="flex items-center">
                        <img className="w-[100px] h-[80px] py-2" src="https://i.pinimg.com/736x/89/5d/24/895d2482fd516e809023ef09d599769f.jpg" alt="" />
                        <p className="mx-4">The Shashank Redemption</p>
                    </td>
                    <td>9.3</td>
                    <td>Action</td>
                    <td>$28.3 million</td>
                    <td><span className="text-red-900/80 font-bold hover:cursor-pointer">Delete</span></td>
                </tr>
                <tr className="border-b-2">
                    <td className="flex items-center">
                        <img className="w-[100px] h-[80px] py-2" src="https://i.pinimg.com/736x/89/5d/24/895d2482fd516e809023ef09d599769f.jpg" alt="" />
                        <p className="mx-4">The Shashank Redemption</p>
                    </td>
                    <td>9.3</td>
                    <td>Action</td>
                    <td>$28.3 million</td>
                    <td><span className="text-red-900/80 font-bold hover:cursor-pointer">Delete</span></td>
                </tr>
            </tbody>
        </table>
       </div>
       </>
    )
}

export default WatchList