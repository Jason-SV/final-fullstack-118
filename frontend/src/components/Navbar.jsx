import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center z-50">
            <Link to={"/dashboard"} className="hover:bg-zinc-300 hover:text-gray-900 h-full text-center px-4 flex items-center justify-center w-28">Dashboard</Link>
            <Link to={"/missions"} className="hover:bg-zinc-300 hover:text-gray-900 h-full text-center px-4 flex items-center justify-center w-28">Missions</Link>
            <Link to={"/heroes"} className="hover:bg-zinc-300 hover:text-gray-900 h-full text-center px-4 flex items-center justify-center w-28">Heroes</Link>
            <Link to={"/profile"} className="hover:bg-zinc-300 hover:text-gray-900 h-full text-center px-4 flex items-center ml-auto justify-center w-28">Profile</Link>
        </nav>
    )
}