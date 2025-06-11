// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="container mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 COECYS. Todos los derechos reservados.</p>
        <Link
          to="/contacto"
          className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded transition"
        >
          Contáctanos
        </Link>
      </div>
    </footer>
  );
}
