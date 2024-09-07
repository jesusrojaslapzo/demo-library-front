import clockIcon from '@/assets/timer.png'
import playIcon from '@/assets/player-control-play.png'
import Items from './components/Items'
import styles from './LandingBanner.module.css'
import BreadCrumb from '@/components/UI/BreadCrumb'

const LadingBanner = () => {

  return (
    <div className="column-m-7 column-m-3 column-4 column-m-end column-s-all row-s-begin">
      <div className={`${styles.landingBreadcrumb} column-all`}>
        <BreadCrumb />
        <br />
      </div>
      <article className={`${styles.landingBanner}`}>
        <header className={styles.landingBannerHeader}>
          <div className={styles.landingBannerPreview}>
            <div className={styles.landingBannerPlay}>
              <img src={playIcon} />
            </div>
            <span>Vista previa del curso</span>
          </div>
        </header>
        <section className={styles.landingBannerHero}>
          <h1>Lapzo jumpstart: aprendiendo a volar juntos</h1>
          <h4>2.578 personas inscritas</h4>
        </section>
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
          <button className={styles.landingBannerButtonPreview}>Vista previa</button>
          <button className={styles.landingBannerButton}>Inscribirme</button>
        </footer>
      </article>
    </div>
  )
}

export default LadingBanner
