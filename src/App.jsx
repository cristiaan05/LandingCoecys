import { Button, Typography } from "@material-tailwind/react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        <Typography variant="h4" className="mb-4 text-blue-900">
          ¡Tailwind con Vite está listo!  
        </Typography>
        <Button color="blue">Empezar</Button>
      </div>
    </div>
  );
}
