import styles from './CourseCard.module.css'
import star from '@/assets/star.png'
import brand from '@/assets/Brand.png'
import saveButton from '@/assets/save-button.png'
import { useNavigate } from 'react-router-dom'
import { EXPLORER_LANDING } from '@/routes/paths/all-paths'

interface CourseCardProps {
  image: string
}

const CourseCard = ({ image }: CourseCardProps) => {
  const navigate = useNavigate()

  return (
    <article className={styles.card} onClick={() => navigate(EXPLORER_LANDING)}>
      <header className={styles.cardHeader}>
        <img
          src={image}
        />
        <span className={styles.cardBadgeNew}>new</span>
      </header>
      <section className={styles.cardBody}>
        <div className={styles.cardInfo}>
          <header className={styles.cardInfoHeader}>
            <div className={styles.cardBrand}>
              <img src={brand} />
              <span>Tu Plataforma</span>
            </div>
            <button><img src={saveButton} /></button>
          </header>
          <h3 className={styles.cardTitle}>Lapzo jumpstart: aprendiendo a volar</h3>
          <div className={styles.cardReviews}>
            <img src={star} />
            <span>0 (0 reseñas)</span>
          </div>
          <footer className={styles.cardInfoFooter}>
            <span>E-learning</span>
            <span>E-learning</span>
          </footer>
        </div>
        <button className={styles.cardCallToAction}>
          Ver detalle
        </button>
      </section>
    </article>
  )
}

export default CourseCard
