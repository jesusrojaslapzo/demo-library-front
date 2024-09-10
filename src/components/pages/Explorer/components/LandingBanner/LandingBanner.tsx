import playIcon from '@/assets/player-control-play.png'
import Items from './components/Items'
import styles from './LandingBanner.module.css'
import BreadCrumb from '@/components/UI/BreadCrumb'
import { useEffect, useRef } from 'react'
import parse from 'html-react-parser';

interface BannerInfo {
  image: string;
  description: string
}

interface LandingBannerProps {
  bannerInfo: BannerInfo[]
}

const LadingBanner = ({ bannerInfo }: LandingBannerProps) => {
  const bannerRef = useRef(null);

  const backgroundUrl = "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI5MnwwfDF8c2VhcmNofDI5fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzI1NDY4OTU4fDA&ixlib=rb-4.0.3&q=80&w=1080"

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.style.setProperty(
        "--background-image",
        `url(${backgroundUrl})`
      );
    }
  }, [backgroundUrl]);

  return (
    <div className="column-m-7 column-m-3 column-4 column-m-end column-s-all row-s-begin">
      <div className={`${styles.landingBreadcrumb} column-all`}>
        <BreadCrumb />
        <br />
      </div>
      <article className={`${styles.landingBanner}`} ref={bannerRef}>
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
            {
              bannerInfo.map((info) => (
                <p><img src={info.image} /> <span>{parse(info.description)}</span></p>

              ))
            }
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
