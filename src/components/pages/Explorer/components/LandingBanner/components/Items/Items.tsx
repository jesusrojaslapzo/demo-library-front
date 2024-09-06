import styles from './Items.module.css'

const Items = () => {
  return (
    <section className={styles.items}>
      <h5>Temas que incluye</h5>
      <div>
        <span>Javascript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>SQL</span>
      </div>
    </section>
  )
}

export default Items
