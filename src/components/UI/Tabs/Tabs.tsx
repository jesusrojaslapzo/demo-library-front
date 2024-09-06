import styles from './Tabs.module.css'

const Tabs = () => {
  return (
    <section>
      <button className={`${styles.tabsItem} ${styles.tabsItemActive}`}>Cursos</button>
      <button className={styles.tabsItem}>Recursos</button>
    </section>
  )
}

export default Tabs
