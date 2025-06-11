// src/components/Navbar.jsx
import React, { useState } from "react";
// 1) Importa Link
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Inicio", to: "/" },
    { name: "Sobre el Congreso", to: "/sobre" },
    { name: "Programa", to: "/programa" },
    { name: "Patrocinadores", to: "/patrocinadores" },
    { name: "¿Cómo Participar?", to: "/participar" },
    { name: "Galería", to: "/galeria" },
    { name: "Registro", to: "/registro" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + título con Link */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/public/LogoSinFondo.png" alt="Coecys 2025" className="w-8 h-8" />
            <span className="text-white text-2xl font-extrabold">COECYS 2025</span>
          </Link>

          {/* Hamburger móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {open ? (
                <svg className="h-6 w-6" /* ícono cerrar */>…</svg>
              ) : (
                <svg className="h-6 w-6" /* ícono menú */>…</svg>
              )}
            </button>
          </div>

          {/* Enlaces desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {links.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="lg:hidden bg-blue-800 bg-opacity-95">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="block text-gray-200 hover:text-white px-3 py-2 rounded-md text-base font-medium transition"
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
