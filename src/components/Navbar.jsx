import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-gray-800 p-4 text-white">
            <nav className="flex felx-col md:flex-row justify-around">
                <h1 className="text-xl front-bold mb4 md:mb-0">SportConnect</h1>
            </nav>
        <header/>
    )
}

export default Navbar;