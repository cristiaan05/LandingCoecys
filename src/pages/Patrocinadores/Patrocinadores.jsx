// src/pages/Sponsors.jsx
import React from "react";
import { Link } from "react-router-dom";

// Datos de ejemplo
const platinumSponsors = [
  { name: "BlueWave", color: "bg-blue-300" },
  { name: "ACME", color: "bg-gray-400" },
  { name: "Hexagon", color: "bg-gray-500" },
];

const otherSponsors = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  color: `bg-gray-${200 + (i % 4) * 100}`,
}));

const categories = [
  { title: "Oro", items: otherSponsors.slice(0, 3) },
  { title: "Plata", items: otherSponsors.slice(3, 6) },
  { title: "Básico", items: otherSponsors.slice(6, 9) },
];

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="mt-20 py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-0 max-w-4xl text-center">

        <h1 className="text-3xl font-bold mb-8">Patrocinadores</h1>

        {/* Platino */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Patrocinadores Platino</h2>
          <div className="flex justify-center items-center space-x-8">
            {platinumSponsors.map((s) => (
              <div
                key={s.name}
                className={`w-24 h-24 ${s.color} rounded flex items-center justify-center`}
              >
                <span className="text-gray-700 font-medium">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Otros patrocinadores (grid 4x3) */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Otros patrocinadores</h2>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {otherSponsors.map((s) => (
              <div
                key={s.id}
                className={`w-16 h-16 ${s.color} rounded-full`}
              />
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="mb-12">
          <div className="flex justify-center space-x-12">
            {categories.map((cat) => (
              <div key={cat.title} className="text-center">
                <h3 className="font-semibold mb-2">{cat.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {cat.items.map((s) => (
                    <div
                      key={s.id}
                      className={`w-12 h-12 ${s.color} rounded`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <p className="mb-4 text-gray-700">
            ¿Quieres ser patrocinador?
          </p>
          <Link to="/participar">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-full transition">
              ¿Cómo participar?
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
