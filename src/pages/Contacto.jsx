// src/pages/Contact.jsx
import React, { useState } from "react";

// Mapea cada red a su icono y URL
const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/coecys",
    icon: "/assets/instagram.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/coecys.usac",
    icon: "/assets/facebook.svg",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@coecys",
    icon: "/assets/tiktok.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/coecys",
    icon: "/assets/linkedin.svg",
  },
];

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí podrías enviar los datos a tu API
    setSent(true);
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-0 max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center">Contacto</h1>
        <p className="text-center text-gray-700">
          ¿Tienes dudas o deseas comunicarte con el equipo organizador?
        </p>

        {/* Correo oficial */}
        <div className="text-center">
          <a
            href="mailto:coecys2025@ejemplo.com"
            className="text-blue-600 hover:underline font-medium"
          >
            coecys@ingenieria.usac.edu.gt
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6">
          {socials.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8"
            >
              <img
                src={icon}
                alt={name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>

        {/* Formulario */}
        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 rounded transition"
            >
              Enviar
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600 font-semibold">
              ¡Tu mensaje ha sido enviado exitosamente!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
