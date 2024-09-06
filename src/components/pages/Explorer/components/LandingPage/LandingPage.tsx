import BreadCrumb from "@/components/UI/BreadCrumb"
import LadingBanner from "../LandingBanner/LandingBanner"
import LandingReviews from "../LandingReviews"
import Accordion from "@/components/UI/Accordion"
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <section className={styles.landingPage}>
      <section>
        <BreadCrumb />
        <h1 className={styles.landingPageTitle}>Lapzo jumpstart: aprendiendo a volar juntos</h1>
        <h3 className={styles.landingPageSubtitle}>Bienvenidos al curso Lapzo jumpstart: aprendiendo a volar juntos</h3>
        <LandingReviews />
        <div>
          <h2>¿Qué aprenderás en este curso?</h2>
          <p><img /> En este curso aprenderás todo lo necesario para comprender a fondo nuestra organización. Comenzaremos con el proceso de Onboarding, seguido de una inmersión en la estrategia de Lapzo, donde conocerás nuestra misión, visión y la estructura organizacional que nos guía. Además, exploraremos nuestra oferta de valor y te compartiremos la historia de Lapzo, para que entiendas cómo hemos llegado a donde estamos hoy.</p>
        </div>
        <div>
          <h2>Temario del curso</h2>
          <p>
            <span>2 Módulos</span>
            <span>18 lecciones</span>
            <span>60m 48s de duración total</span>
          </p>
          <Accordion />
        </div>
        <div>
          <h2>Descripción del curso</h2>
          <p>¡Bienvenido/a a bordo! Como nuevo/a colaborador/a, queremos que empieces con el pie derecho y estés preparado/a para destacar en tu rol y en nuestra cultura organizacional. Este curso de onboarding no solo te presentará quiénes somos, sino que te sumergirá en nuestra historia, misión, visión, y valores, para que entiendas qué nos mueve. Conocerás a nuestro equipo, nuestra estructura organizacional, y los principios de liderazgo que inspiran nuestras decisiones diarias. También exploraremos nuestra estrategia y oferta de valor para clientes, junto con los productos que nos hacen únicos. ¡Este es el primer paso para que tu éxito sea el de todos! ¡Te esperamos!</p>
        </div>
      </section>

      <LadingBanner />
    </section>
  )
}

export default LandingPage
