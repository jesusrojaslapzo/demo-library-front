import { Link } from 'react-router-dom'
import styles from './BreadCrumb.module.css'

interface BreadCrumbProps {
  items?: number;
}

const BreadCrumb = ({ items = 2 }: BreadCrumbProps) => {
  return (
    <nav className={styles.breadCrumb}>
      <ul className={styles.breadCrumList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {
          items > 1 && (
            <>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link to="/explorer">Explorador</Link>
              </li>
            </>
          )
        }
        {
          items > 2 && (
            <>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link to="/explorer/course">Curso</Link>
              </li>
            </>
          )
        }

      </ul>
    </nav>
  )
}

export default BreadCrumb
