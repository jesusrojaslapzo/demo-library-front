import clockIcon from '@/assets/timer.png'
import playIcon from '@/assets/player-control-play.png'
import Items from './components/Items'
import styles from './LandingBanner.module.css'

const LadingBanner = () => {

  return (
    <article className={styles.landingBanner}>
      <header className={styles.landingBannerHeader}>
        <div className={styles.landingBannerPreview}>
          <div className={styles.landingBannerPlay}>
            <img src={playIcon} />
          </div>
          <span>Vista previa del curso</span>
        </div>
      </header>
      <section className={styles.landingBannerBody}>
        <h4>Este curso incluye</h4>
        <div className={styles.landingBannerInfo}>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
        </div>
        <div className={styles.landingBannerItems}>
          <Items />
          <Items />
        </div>
      </section>
      <footer className={styles.landingBannerFooter}>
        <button className={styles.landingBannerButton}>Inscribirme</button>
      </footer>
    </article>
  )
}

export default LadingBanner
