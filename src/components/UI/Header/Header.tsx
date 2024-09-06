import { isOpenSidebarAtom } from "@/store/menuAtom"
import { useAtomValue, useSetAtom } from "jotai"
import styles from './Header.module.css'

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
        <img
          src="https://firebasestorage.googleapis.com/v0/b/lernit-v2.appspot.com/o/assets%2Fclients%2Fteam%2Flogo_lapzo_blanco.png?alt=media&token=abda92c1-bfde-41a1-aaf0-66b22877e68c"
          alt="" />
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
