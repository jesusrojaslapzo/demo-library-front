import { useRoutes } from 'react-router-dom';
import Wrapper from "@/components/Layout/Wrapper"
import Header from "@/components/UI/Header"
import Sidebar from "@/components/UI/Sidebar"
import styles from './Main.module.css'
import routes from '@/routes';
import { Suspense } from 'react';
import Loading from '@/components/UI/Loading';

const Main = () => {
  const adminRoute = useRoutes(routes);

  return (
    <section className={styles.mainWrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <Sidebar />
        <section className={styles.mainContent}>
          <Suspense fallback={<Loading />}>
            {adminRoute}
          </Suspense>
        </section>
      </main>
    </section>

  )
}

export default Main
