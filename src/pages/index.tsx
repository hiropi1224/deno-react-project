import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dino } from "../types.ts";

export default function Index() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs/`);
      const allDinosaurs = await response.json() as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-amber-50 size-full">
      <h1 className="text-4xl">Welcome to the Dinosaur app</h1>
      <p className="">Click on a dinosaur below to learn more.</p>
      <ul className="grid grid-cols-4 gap-4 mt-4">
        {dinosaurs.map((dinosaur: Dino) => {
          return (
            <li
              key={dinosaur.name}
              className="bg-amber-200 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-amber-300 transition-shadow"
            >
              <Link
                to={`/${dinosaur.name.toLowerCase()}`}
                key={dinosaur.name}
                className=""
              >
                {dinosaur.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
