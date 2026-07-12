import { useEffect, useState } from "react";
import CourtCard from "./CourtCard.jsx";
import { courts as mockCourts } from "../data/courts.js";

function CourtsList() {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Datos temporales hasta conectar con el endpoint real de canchas.
      setCourts(mockCourts);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "rgba(0,0,26,0.8)",
            border: "1px solid #383838",
          }}
        >
          <p className="text-sm text-slate-400">Cargando canchas...</p>
        </div>
      </section>
    );
  }

  if (courts.length === 0) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "rgba(0,0,26,0.8)",
            border: "1px solid #383838",
          }}
        >
          <p className="mb-3 text-4xl">🔍</p>

          <h2 className="text-xl font-bold text-white">
            No hay canchas disponibles
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Probá cambiando los filtros o realizando una nueva búsqueda.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-6">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-white">{courts.length}</span>{" "}
          {courts.length === 1 ? "cancha disponible" : "canchas disponibles"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))}
      </div>
    </section>
  );
}

export default CourtsList;