import brand from '@/assets/Brand.png'
import star from '@/assets/star.png'

const LandingReviews = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 0",
        borderBottom: "1px solid #E0E0E0",
        marginBottom: "1rem",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          gap: "1rem",
          padding: "10px",
        }}
      >
        <img src={brand} />
        <span>Tu Plataforma</span>

        <div>
          <img src={star} />
          <span>4.81 (252)</span>
        </div>
        <span
          style={{
            color: "#6D29FF",
            backgroundColor: "#EBECFE",
            padding: "2px",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          New
        </span>
      </div>
    </section>
  );
}

export default LandingReviews
