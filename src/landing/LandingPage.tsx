import React from "react";
import { ModeToggle } from '@/components/shared/ModeToggle';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">INCADEV</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-blue-600">
            Características
          </a>
          <a href="#about" className="hover:text-blue-600">
            Sobre Nosotros
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contacto
          </a>
          <ModeToggle />
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-800">
          Capacítate desde donde estés 🚀
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          En <strong>INCADEV</strong> te ofrecemos formación virtual y remota en
          habilidades tecnológicas y profesionales. Aprende a tu ritmo, con los
          mejores instructores.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
          Comenzar Ahora
        </button>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-10 text-blue-700">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Clases 100% Online</h4>
              <p className="text-gray-600">
                Aprende desde cualquier lugar, con clases en vivo y grabadas.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Certificaciones</h4>
              <p className="text-gray-600">
                Obtén certificados digitales reconocidos por empresas e
                instituciones.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Soporte Personalizado</h4>
              <p className="text-gray-600">
                Nuestro equipo te acompaña durante todo tu proceso de
                aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6 text-blue-700">
            Sobre INCADEV
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos un instituto de capacitación virtual comprometido con la
            formación profesional de nuestros estudiantes. Combinamos tecnología
            moderna con un enfoque humano para impulsar tu desarrollo.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-blue-900 text-white py-8 text-center mt-10"
      >
        <p className="mb-2">© {new Date().getFullYear()} INCADEV. Todos los derechos reservados.</p>
        <p>
          📧 <a href="mailto:contacto@incadev.com" className="underline">contacto@incadev.com</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
