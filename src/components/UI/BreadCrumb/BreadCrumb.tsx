import { Link } from 'react-router-dom'
import styles from './BreadCrumb.module.css'

const BreadCrumb = () => {
  return (
    <nav className={styles.breadCrumb}>
      <ul className={styles.breadCrumList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link to="/explorer">Explorador</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumb
