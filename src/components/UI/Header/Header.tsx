import { isOpenSidebarAtom } from "@/store/menuAtom"
import { useAtomValue, useSetAtom } from "jotai"

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
    <header>
      <div className="logo-details" onClick={toggleSidebar}>
        <i className={`bx ${handleMenuBtnChange()}`} id="btn"></i>
      </div>
      <div className="">
        <i className='bx bx-menu' id="btn"></i>
      </div>


      <div className="logos">
        <img
          src="https://cdn.prod.website-files.com/62bbfb429eaf728cd08009f8/65aacf48bde4467e127570ba_logo-lapzo2-p-500.png"
          alt="" />
      </div>
      <div className="busqueda">
        <i className='bx bx-search'></i>
        <input className="search-input" placeholder="Comienza a buscar..." />
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
