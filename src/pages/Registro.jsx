// src/pages/Registration.jsx
import React, { useState } from "react";
import dayjs from "dayjs";

const participationOptions = ["Asistente", "Taller", "Ponente", "Otros"];

export default function Registro() {
  const [form, setForm] = useState({
    name: "",
    university: "",
    career: "",
    email: "",
    type: "Asistente",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí podrías enviar form a tu API...
    setSubmitted(true);
  };

  // Genera un archivo .ics para el evento de inicio
  const downloadICS = () => {
    const start = dayjs("2025-09-22T09:00:00").utc().format("YYYYMMDDTHHmmss") + "Z";
    const end = dayjs("2025-09-22T10:00:00").utc().format("YYYYMMDDTHHmmss") + "Z";
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//COECYS//Evento//ES
BEGIN:VEVENT
UID:${Date.now()}@coecys2025
SUMMARY:Inicio COECYS 2025
DTSTART:${start}
DTEND:${end}
LOCATION:Edificio TEC, Zona 4, Guatemala
DESCRIPTION:Ciencia de Datos y Seguridad Digital
END:VEVENT
END:VCALENDAR`.trim();

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "COECYS2025_Inicio.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="registro" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-0 max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">
          Registro
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Nombre completo*</label>
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
              <label className="block text-gray-700 mb-1">Universidad</label>
              <input
                type="text"
                name="university"
                value={form.university}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Carrera</label>
              <input
                type="text"
                name="career"
                value={form.career}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Correo electrónico*</label>
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
              <label className="block text-gray-700 mb-1">Tipo de participación</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {participationOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 rounded transition"
            >
              Enviar
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-green-600 font-semibold">¡Tu registro ha sido exitoso!</p>
            <button
              onClick={downloadICS}
              className="bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-6 rounded transition"
            >
              Agregar a calendario
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
