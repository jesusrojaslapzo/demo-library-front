import Wrapper from "@/components/Layout/Wrapper"
import Header from "@/components/UI/Header"
import Sidebar from "@/components/UI/Sidebar"
import styles from './Main.module.css'

const Main = () => {
  return (
    <section className={styles.mainWrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <Sidebar />
        <Wrapper />
      </main>
    </section>
  )
}

export default Main
