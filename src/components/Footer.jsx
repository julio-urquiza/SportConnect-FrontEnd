const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo / descripción */}
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              SportConnect
            </h2>
            <p className="text-gray-400 mt-2">
              Reservá canchas deportivas de forma rápida y sencilla.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Enlaces
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-green-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-green-400 transition">
                  Iniciar sesión
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contacto
            </h3>
            <p className="text-gray-400">
              contacto@sportrent.com
            </p>
            <p className="text-gray-400">
              +54 11 1234-5678
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          © 2026 SportConnect. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;