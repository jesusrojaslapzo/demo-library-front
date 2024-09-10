import brand from '@/assets/Brand.png'
import star from '@/assets/star.png'
import styles from './LandingReviews.module.css'

const LandingReviews = () => {
  return (
    <section
      className={styles.landingReview}
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

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
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
          Certificado por: Lapzo
        </span>
      </div>
    </section>
  );
}

export default LandingReviews
