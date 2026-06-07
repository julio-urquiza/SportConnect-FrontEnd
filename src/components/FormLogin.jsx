import bgRegistro from "../assets/imagenes/bg-registro.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Zap,
  Trophy,
  Target,
  MapPin,
} from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = {};
    const email = formData.email.trim();

    if (!email) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = "Ingresá un correo electrónico válido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log({
      email: formData.email.trim(),
      password: formData.password,
    });

    // ACA VA LA PARTE QUE NOSE OSEA EL BACKEND

    
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b22] font-sans text-white">
      {/* CANCHITA DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
            backgroundImage: `url(${bgRegistro})`,
          }}
      />

      {/* Overlay oscuro, lo comento para ver como queda la imagen de fondo, por lo visto queda mejor, veremos que dice julio*/}
      {/* <div className="absolute inset-0 bg-[#070b22]/90 backdrop-blur-sm" /> */}

      {/* Degradados que quedan lindos */}
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-32 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-10 md:flex-row md:justify-between lg:gap-20">
        {/* Columna izquierda */}
        <div className="w-full max-w-xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-300">
            <Zap className="h-4 w-4" />
            <span>Plataforma #1 de reservas</span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bienvenidos a{" "}
            <span className="block bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              SportConnect
            </span>
          </h1>

          <p className="mx-auto max-w-md text-lg font-medium leading-relaxed text-slate-300 md:mx-0">
            Reservá canchas deportivas de forma rápida y sencilla.
          </p>

          <div className="mt-12 flex justify-center gap-4 md:justify-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-400/30 bg-slate-900/70 text-teal-300 shadow-lg">
              <MapPin className="h-6 w-6" />
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pink-400/30 bg-slate-900/70 text-pink-300 shadow-lg">
              <Target className="h-6 w-6" />
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-400/30 bg-slate-900/70 text-orange-300 shadow-lg">
              <Trophy className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="w-full max-w-md">
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-teal-400/20 to-pink-500/20 blur-xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101936]/70 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <h2 className="mb-8 text-3xl font-bold text-white">
                Iniciar sesión
              </h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* CORREO ELECTRONICO */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 ml-2 block text-sm font-medium text-slate-300"
                  >
                    Correo electrónico
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400/70">
                      <Mail className="h-5 w-5" />
                    </span>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ejemplo@email.com"
                      required
                      autoComplete="email"
                      className="w-full rounded-full border border-teal-400/20 bg-[#152042]/80 py-3.5 pl-12 pr-5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-teal-300/60 focus:ring-2 focus:ring-teal-400/20"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 ml-2 text-sm text-pink-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* CONTRASEÑA */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 ml-2 block text-sm font-medium text-slate-300"
                  >
                    Contraseña
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-400/70">
                      <Lock className="h-5 w-5" />
                    </span>

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      minLength={8}
                      autoComplete="current-password"
                      className="w-full rounded-full border border-teal-400/20 bg-[#152042]/80 py-3.5 pl-12 pr-12 text-white placeholder:text-slate-500 outline-none transition-all focus:border-teal-300/60 focus:ring-2 focus:ring-teal-400/20"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                      aria-label="Mostrar u ocultar contraseña"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-2 ml-2 text-sm text-pink-300">
                      {errors.password}
                    </p>
                  )}

                  <div className="mt-2 text-right">
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-teal-300"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500 py-4 text-lg font-bold text-white shadow-[0_0_25px_rgba(236,72,153,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:from-orange-400 hover:to-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] active:scale-95"
                >
                  Ingresar
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-400">
                ¿No tenés cuenta?{" "}
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text font-bold text-transparent transition hover:opacity-80"
                >
                  Registrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// quedo good?
export default FormLogin;