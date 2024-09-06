import CourseCard from "@/components/UI/CourseCard"
import styles from './Explorer.module.css'
import Tabs from "@/components/UI/Tabs"
import BreadCrumb from "@/components/UI/BreadCrumb"

const Explorer = () => {
  return (
    <>
      <section className={styles.explorerHeader}>
        <BreadCrumb />
        <h1 className={styles.explorerTitle}>Todos los cursos</h1>
      </section>

      <Tabs />
      <section className={styles.explorerCardWrapper}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </>
  )
}

export default Explorer
