import clockIcon from '@/assets/timer.png'
import Items from './components/Items'
import styles from './LandingBanner.module.css'

const LadingBanner = () => {

  return (
    <article className={styles.landingBanner}>
      <header>
        <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI5MnwwfDF8c2VhcmNofDI5fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzI1NDY4OTU4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        <div>
          <div></div>
          <span>Vista previa del curso</span>
        </div>
      </header>
      <section>
        <h4>Este curso incluye</h4>
        <div>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
          <p><img src={clockIcon} /> <span>Duración: 60m 48s</span></p>
        </div>
        <div>
          <Items />
          <Items />
        </div>
      </section>
      <footer>
        <button>Inscribirme</button>
      </footer>
    </article>
  )
}

export default LadingBanner
