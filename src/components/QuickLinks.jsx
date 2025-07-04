import { Button } from "@material-tailwind/react";

export default function QuickLinks() {
  const links = [
    { label: "Programa", href: "#programa" },
    { label: "Patrocinadores", href: "#patrocinadores" },
    { label: "Registro", href: "#registro" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <nav className="flex justify-center space-x-4 py-8 bg-gray-100">
      {links.map(link => (
        <a key={link.href} href={link.href}>
          <Button variant="text" color="blue-gray">
            {link.label}
          </Button>
        </a>
      ))}
    </nav>
  );
}
