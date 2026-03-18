import { motion } from "framer-motion";

export default function VoxifyWebsite() {
  const scrollToContact = () => {
    const el = document.getElementById("contacto");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Locución Comercial",
      desc: "Anuncios y contenido publicitario con una voz que conecta, transmite confianza y genera impacto real en tu audiencia."
    },
    {
      title: "Narración",
      desc: "Narraciones envolventes para documentales, audiolibros y storytelling, con una voz profunda y cautivadora."
    },
    {
      title: "YouTube Voice Over",
      desc: "Voz versátil para creadores que buscan destacar, mantener la atención y elevar la calidad de su contenido."
    },
    {
      title: "Traducción + Voz",
      desc: "Adaptación profesional inglés/español con grabación incluida, manteniendo intención, tono y naturalidad."
    }
  ];

  const container = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: `
          radial-gradient(circle at 20% 20%, rgba(168,85,247,0.25), transparent 40%),
          radial-gradient(circle at 80% 0%, rgba(236,72,153,0.2), transparent 40%),
          radial-gradient(circle at 50% 100%, rgba(124,58,237,0.2), transparent 40%),
          linear-gradient(180deg, #0a0014 0%, #000000 100%)
        `,
        color: "white",
        fontFamily: "Inter, system-ui",
      }}
    >
      <div style={container}>

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", paddingTop: "40px", marginBottom: "40px" }}
        >
          <img
            src="/logo12345.png"
            alt="Voxify"
            style={{ width: "150px", cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </motion.div>

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "120px" }}
        >
          <h1 style={{
            fontSize: "48px",
            fontWeight: "800",
            lineHeight: "1.2",
            maxWidth: "800px",
            margin: "0 auto",
            background: "linear-gradient(90deg,#c084fc,#f472b6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>
            Convierte tu contenido en una experiencia que atrapa y vende
          </h1>

          <p style={{ color: "#aaa", marginTop: "20px", fontSize: "18px" }}>
            Dale personalidad y calidad profesional a cada palabra.
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 40px rgba(236,72,153,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: "30px",
              padding: "16px 42px",
              borderRadius: "999px",
              border: "none",
              background: "linear-gradient(90deg,#9333ea,#ec4899)",
              color: "white",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Solicitar presupuesto
          </motion.button>

          <p style={{ color: "#777", marginTop: "10px" }}>
            Respuesta en menos de 24h
          </p>
        </motion.section>

        {/* SERVICES */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          marginBottom: "120px",
          maxWidth: "800px",
          margin: "0 auto",
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                background: "rgba(255,255,255,0.08)",
                boxShadow: "0 0 30px rgba(168,85,247,0.3)"
              }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              style={{
                padding: "30px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                transition: "0.3s"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{s.title}</h3>
              <p style={{ color: "#aaa" }}>{s.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* DEMO */}
        <section style={{ textAlign: "center", marginBottom: "120px" }}>
          <h2 style={{ marginBottom: "30px" }}>Escuchá mi voz</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "20px",
            maxWidth: "700px",
            margin: "auto"
          }}>
            <div style={audioBox}>
              <h3>Español</h3>
              <audio
  controls
  style={{
    width: "100%",
    filter: "invert(1) hue-rotate(180deg)",
    opacity: 0.9,
    borderRadius: "10px"
  }}
>
                <source src="/demospanish1.mp3" />
              </audio>
            </div>

            <div style={audioBox}>
              <h3>English</h3>
              <audio
  controls
  style={{
    width: "100%",
    filter: "invert(1) hue-rotate(180deg)",
    opacity: 0.9,
    borderRadius: "10px"
  }}
>
                <source src="/demoenglish1.mp3" />
              </audio>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contacto" style={{ textAlign: "center", paddingBottom: "80px" }}>
          <h2 style={{ marginBottom: "20px" }}>Contacto</h2>

          <form
            action="https://formsubmit.co/Valentino950.vg22@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}
          >
            <input placeholder="Nombre" name="name" required style={inputStyle} />
            <input placeholder="Email" name="email" required style={inputStyle} />
            <textarea placeholder="Contame tu proyecto" name="message" required style={textareaStyle} />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={buttonStyle}
            >
              Enviar
            </motion.button>
          </form>
        </section>

      </div>
    </div>
  );
}

const audioBox = {
  padding: "20px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  width: "300px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "white"
};

const textareaStyle = {
  ...inputStyle,
  height: "120px",
  resize: "none"
};

const buttonStyle = {
  marginTop: "10px",
  padding: "12px 30px",
  borderRadius: "20px",
  background: "linear-gradient(90deg,#9333ea,#ec4899)",
  border: "none",
  color: "white",
  cursor: "pointer"
};