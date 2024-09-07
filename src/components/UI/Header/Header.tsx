import { isOpenSidebarAtom } from "@/store/menuAtom"
import { useAtomValue, useSetAtom } from "jotai"
import styles from './Header.module.css'
import logo from '@/assets/logo-lapzo-blanco.png'
import { Link } from "react-router-dom"

const Header = () => {
  const isOpen = useAtomValue(isOpenSidebarAtom)
  const setIsOpen = useSetAtom(isOpenSidebarAtom)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuBtnChange = () => {
    // Esta función no es estrictamente necesaria en React, pero puede servir para manejar iconos adicionales si los usas.
    return isOpen ? 'bx-menu-alt-left' : 'bx-menu';
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoDetails} onClick={toggleSidebar}>
        <i className={`bx ${handleMenuBtnChange()}`} id="btn"></i>
      </div>

      <div className={styles.logos}>
        <Link to="/">
          <img
            src={logo}
            alt="" />
        </Link>
      </div>
      <div className={styles.searchBar}>
        <i className='bx bx-search'></i>
        <input className={styles.searchInput} placeholder="Comienza a buscar..." />
        <i className='bx bx-filter'></i>
      </div>

      <div className="items">
        <ul className="elements">
          <li>
            <a href="#"><i className='bx bx-bell'></i></a>
          </li>
          <li><a href="#"><i className='bx bx-grid'></i></a></li>
        </ul>
      </div>

    </header>

  )
}

export default Header
