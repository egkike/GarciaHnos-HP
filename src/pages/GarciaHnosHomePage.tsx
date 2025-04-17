import { useState, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import LogoGH from "../assets/Logo_GH_04.jpeg";
import FinanzasIMG from "../assets/Finanzas.jpg";

const GarciaHnosHomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.nombre.trim() ||
      !formData.email.trim() ||
      !formData.mensaje.trim()
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Credenciales de EmailJS
    const serviceID = "service_1ddmw4f";
    const templateID = "template_9op7o5d";
    const userID = "X0Ow_HprIn2ejR3L6";

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, userID)
      .then((response) => {
        console.log(
          "Correo enviado con éxito:",
          response.status,
          response.text
        );
        alert("Correo enviado correctamente 📧");
        setFormData({ nombre: "", email: "", mensaje: "" });
      })
      .catch((error) => {
        console.error("Error enviando el correo:", {
          status: error.status,
          text: error.text,
          details: error,
        });
        alert(
          `Error al enviar el correo: ${
            error.text ||
            "Verifica las credenciales de EmailJS o la configuración de la plantilla"
          } ⚠️`
        );
      });
  };

  const values = [
    {
      title: "Experiencia y Conocimiento",
      description:
        "Valoramos la vasta experiencia acumulada por los fundadores en empresas multinacionales y la aplicamos para ofrecer soluciones sólidas y con visión de futuro.",
    },
    {
      title: "Orientación al Cliente",
      description:
        "Ponemos las necesidades de nuestros clientes en el centro, buscando comprender sus desafíos y ofrecer soluciones que generen valor real.",
    },
    {
      title: "Colaboración y Conexión",
      description:
        "Fomentamos relaciones sólidas para conectar oportunidades y lograr resultados superiores, especialmente entre Argentina y Paraguay.",
    },
    {
      title: "Integridad y Confianza",
      description:
        "Actuamos con honestidad, transparencia y ética, construyendo relaciones de confianza duraderas.",
    },
    {
      title: "Innovación y Adaptabilidad",
      description:
        "Buscamos nuevas formas de agregar valor, adaptándonos al mercado y usando tecnología para soluciones creativas.",
    },
    {
      title: "Compromiso con el Crecimiento",
      description:
        "Estamos comprometidos con el crecimiento sostenible de nuestros clientes, nuestra empresa y la región.",
    },
    {
      title: "Profesionalismo y Excelencia",
      description:
        "Mantenemos altos estándares de profesionalismo, buscando la excelencia en nuestros servicios.",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-dark-2">
      {/* Contenido principal */}
      <main className="pt-8 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Logo encima de Nuestra Historia */}
        <div className="flex justify-center my-12">
          <img
            src={LogoGH}
            alt="GarciaHnos Logo"
            className="h-32 sm:h-48 object-contain transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary rounded-[15px]"
          />
        </div>

        {/* Sección: Historia */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-primary mb-6 text-center">
            Nuestra Historia
          </h2>
          <p className="text-base sm:text-lg text-text-dark dark:text-white leading-relaxed text-center max-w-3xl mx-auto">
            GarciaHnos fue fundada en 2009 por los hermanos Rodrigo y Enrique
            Garcia, motivados por la idea de emprender en negocios donde podamos
            agregar valor y crecimiento. Inspirados en nuestra experiencia en
            empresas multinacionales, decidimos crear una empresa que combine
            conocimiento, profesionalismo y pasión por conectar oportunidades.
          </p>
        </section>

        <hr className="w-1/2 mx-auto my-12 border-t border-gray-300 dark:border-gray-600 transition-colors duration-300 hover:border-primary" />

        {/* Sección: Trayectoria */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-primary mb-6 text-center">
            Nuestro Equipo Fundador
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-1 rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-primary">
              <h3 className="text-xl font-bold text-text-dark dark:text-text-primary mb-3">
                Rodrigo Garcia
              </h3>
              <p className="text-base text-text-dark dark:text-white">
                Con una amplia experiencia en finanzas, auditoría, logística,
                comercio internacional y local, Rodrigo aporta una visión
                estratégica clave para el éxito de nuestros proyectos.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-1 rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-primary">
              <h3 className="text-xl font-bold text-text-dark dark:text-text-primary mb-3">
                Enrique Garcia
              </h3>
              <p className="text-base text-text-dark dark:text-white">
                Experto en tecnología de la información, aseguramiento de
                ingresos, investigación y desarrollo de sistemas, Enrique lidera
                la innovación y las soluciones tecnológicas de GarciaHnos.
              </p>
            </div>
          </div>
        </section>

        <hr className="w-1/2 mx-auto my-12 border-t border-gray-300 dark:border-gray-600 transition-colors duration-300 hover:border-primary" />

        {/* Sección: Evolución */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-primary mb-6 text-center">
            Nuestra Evolución
          </h2>
          <p className="text-base sm:text-lg text-text-dark dark:text-white leading-relaxed max-w-3xl mx-auto">
            Desde nuestros inicios, GarciaHnos ha evolucionado a través de
            diversos emprendimientos:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg text-text-dark dark:text-white mt-4 max-w-3xl mx-auto">
            <li>Tienda de ropa en Asunción, Paraguay (2 años).</li>
            <li>Servicio de transporte de productos en Paraguay (1 año).</li>
            <li>
              Importación y comercialización de vinos de Mendoza, Argentina (5
              años).
            </li>
            <li>
              Representación y fabricación de cortinas en Paraguay (10 años).
            </li>
          </ul>
          <p className="text-base sm:text-lg text-text-dark dark:text-white leading-relaxed mt-6 max-w-3xl mx-auto">
            Hoy, desde Mendoza, Argentina, ofrecemos:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg text-text-dark dark:text-white mt-4 max-w-3xl mx-auto">
            <li>
              Intermediación para conectar y concretar negocios entre Argentina
              y Paraguay.
            </li>
            <li>
              Gestión de procesos: búsqueda de proveedores, negociaciones,
              control de calidad.
            </li>
            <li>
              Asesoría para proyección y planificación de emprendimientos.
            </li>
          </ul>
        </section>

        <hr className="w-1/2 mx-auto my-12 border-t border-gray-300 dark:border-gray-600 transition-colors duration-300 hover:border-primary" />

        {/* Sección: Misión, Visión y Valores */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-primary mb-6 text-center">
            Misión, Visión y Valores
          </h2>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark dark:text-text-primary mb-3">
              Misión
            </h3>
            <p className="text-base sm:text-lg text-text-dark dark:text-white mb-6">
              Impulsar el crecimiento y la creación de valor para nuestros
              clientes y socios comerciales, a través de nuestra experiencia
              multidisciplinaria, facilitando la conexión y el desarrollo de
              negocios entre Argentina y Paraguay, brindando asesoramiento
              estratégico y soluciones tecnológicas innovadoras.
            </p>
            <h3 className="text-2xl font-bold text-text-dark dark:text-text-primary mb-3">
              Visión
            </h3>
            <p className="text-base sm:text-lg text-text-dark dark:text-white mb-6">
              Ser reconocidos como un socio estratégico clave para el desarrollo
              de negocios en la región Argentina-Paraguay, distinguiéndonos por
              nuestra capacidad de generar valor, fomentar la colaboración y
              ofrecer soluciones integrales que impulsen el éxito de nuestros
              clientes.
            </p>
            <h3 className="text-2xl font-bold text-text-dark dark:text-text-primary mb-3">
              Valores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-1 rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-transparent hover:border-primary"
                >
                  <h4 className="text-lg font-medium text-text-dark dark:text-text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-base text-text-dark dark:text-white">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="w-1/2 mx-auto my-12 border-t border-gray-300 dark:border-gray-600 transition-colors duration-300 hover:border-primary" />

        {/* Sección: Contacto */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-primary mb-6 text-center">
            Contacta con Nosotros
          </h2>
          <div
            className="max-w-3xl mx-auto bg-cover bg-center rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-6 sm:p-8 transition-all duration-300 hover:border-2 hover:border-primary relative before:absolute before:inset-0 before:bg-white/70 dark:before:bg-dark-1/70 before:rounded-[15px] before:z-0"
            style={{ backgroundImage: `url(${FinanzasIMG})` }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-900 dark:text-text-primary mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full p-3 text-lg text-gray-900 dark:text-text-primary bg-transparent border-b border-gray-700 dark:border-dark-5 focus:border-b-primary outline-none transition-colors duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 dark:text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 text-lg text-gray-900 dark:text-text-primary bg-transparent border-b border-gray-700 dark:border-dark-5 focus:border-b-primary outline-none transition-colors duration-300"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-900 dark:text-text-primary mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-3 text-lg text-gray-900 dark:text-text-primary bg-transparent border-b border-gray-700 dark:border-dark-5 focus:border-b-primary outline-none transition-colors duration-300"
                  placeholder="Tu mensaje"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-3 px-6 text-text-dark dark:text-text-primary bg-primary rounded-[25px] border-2 border-primary uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5492617132741"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:bg-transparent hover:text-[#128C7E] hover:border-2 hover:border-[#128C7E]"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Pie de página */}
      <footer className="bg-white dark:bg-dark-1 py-6 text-center">
        <p className="text-sm text-[#0fbcf9]">
          © {new Date().getFullYear()} GarciaHnos. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default GarciaHnosHomePage;
