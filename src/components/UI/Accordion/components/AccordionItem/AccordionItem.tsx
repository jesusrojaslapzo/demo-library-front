const AcordionItem = ({title}:{title:string}) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: "1px solid #E0E0E0",
        marginBottom: "1rem",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <h4
        style={{
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "28px",
          letterSpacing: "0.01em",
          color: "#262338",
        }}
      >
        {title}
      </h4>

      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <span>8 lecciones</span>
        <span>30 m 24s</span>
        <span>Modulo1</span>
        <span>^</span>
      </div>
    </section>
  );
}

export default AcordionItem
