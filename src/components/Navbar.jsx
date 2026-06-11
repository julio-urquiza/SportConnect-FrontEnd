import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-gray-950 p-4 text-white">
            <nav className="flex felx-col md:flex-row justify-between items-center">
                <h1 className="text-xl front-bold mb4 md:mb-0">SPORTCONNECT</h1>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <Link to="/" className="hover:text-gray-400">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-400">Ingresar</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-gray-400">Registrarse</Link>
                    </li>
                </ul>
            </nav>
        </header> 
    );
}

export default Navbar;