import { MapPin, Star } from "lucide-react";

const JURA = "'Jura', sans-serif";
const ROBOTO = "'Roboto', sans-serif";

const SPORT_LABELS = {
  padel: { emoji: "🎾", label: "Padel", color: "#ff5a00" },
  tenis: { emoji: "🎾", label: "Tenis", color: "#ff8c4a" },
  futbol: { emoji: "⚽", label: "Fútbol", color: "#ffb380" },
};

function CourtCard({ court }) {
  const sport = SPORT_LABELS[court.sport] ?? {
    emoji: "🏟️",
    label: court.sport || "Deporte",
    color: "#8c8c8c",
  };

  return (
    <article
      className="group overflow-hidden rounded-2xl border border-[#383838] bg-[#00001a]/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a00] hover:shadow-[0_8px_32px_rgba(255,90,0,0.18)]"
    >
      {/* Imagen de la cancha */}
      <div
        className="relative h-48 overflow-hidden"
        style={{ background: "#000030" }}
      >
        <img
          src={court.image}
          alt={court.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,26,0.85) 0%, transparent 50%)",
          }}
        />

        {/* Deporte */}
        <div
          className="absolute left-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs"
          style={{
            background: "rgba(0,0,26,0.75)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${sport.color}60`,
            color: sport.color,
            fontFamily: ROBOTO,
            fontWeight: 500,
          }}
        >
          {sport.emoji} {sport.label}
        </div>

        {/* Rating */}
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg px-2 py-1 text-xs"
          style={{
            background: "rgba(0,0,26,0.75)",
            backdropFilter: "blur(8px)",
            color: "#fbbf24",
            fontFamily: ROBOTO,
          }}
        >
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          {court.rating}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3
          className="mb-1 truncate text-white"
          style={{
            fontFamily: JURA,
            fontSize: "1.15rem",
            fontWeight: 700,
          }}
        >
          {court.name}
        </h3>

        <div
          className="mb-4 flex items-center gap-1 truncate text-sm"
          style={{
            fontFamily: ROBOTO,
            color: "#8c8c8c",
          }}
        >
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{court.address}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p
              className="mb-0.5 text-xs"
              style={{
                fontFamily: ROBOTO,
                color: "#8c8c8c",
              }}
            >
              Precio / hora
            </p>

            <p
              style={{
                fontFamily: JURA,
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#ff5a00",
              }}
            >
              ${court.price.toLocaleString("es-AR")}
            </p>
          </div>

          <button
            type="button"
            className="h-[38px] rounded-[14px] bg-green-500 px-4 text-sm font-bold text-white shadow-[0_3px_12px_rgba(34,197,94,0.3)] transition-all duration-150 hover:bg-green-600"
            style={{
              fontFamily: JURA,
            }}
          >
            RESERVAR →
          </button>
        </div>
      </div>
    </article>
  );
}

export default CourtCard;