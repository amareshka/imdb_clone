import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex align-items pl-4 py-4 border gap-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
            </svg>
            <Link to="/" className="text-xl font-bold text-blue-400">Movies</Link>
            <Link to="/watchlist" className="text-xl font-bold text-blue-400">Watchlist</Link>
        </div>
    )
}

export default Navbar;