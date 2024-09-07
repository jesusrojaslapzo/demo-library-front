import { EXPLORER_HOME, HOME_PATH } from '@/routes/paths/all-paths';
import { isOpenSidebarAtom } from '@/store/menuAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useAtomValue(isOpenSidebarAtom)
  const setIsOpen = useSetAtom(isOpenSidebarAtom)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        {[
          { navigateTo: HOME_PATH, icon: 'bx bx-grid-alt', name: 'Dashboard' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-search', name: 'Explorador' },
          { navigateTo: '/', icon: 'bx bx-book-open', name: 'Aprendizaje' },
          { navigateTo: '/', icon: 'bx bx-user', name: 'Perfil' },
          { navigateTo: '/', icon: 'bx bx-bullseye', name: 'Objetivos' },
          { navigateTo: '/', icon: 'bx bx-heart', name: 'Comunidad' },
          { navigateTo: '/', icon: 'bx bx-loader-circle', name: 'Evaluaciones' },
          { navigateTo: '/', icon: 'bx bx-briefcase-alt', name: 'Oferta' },
        ].map((item, index) => (
          <li
            key={index}
            className={`li ${activeIndex === index ? 'activo' : ''}`}
          >
            <Link
              to={item.navigateTo}
              onClick={() => setIsOpen(false)}
            >
              <i className={item.icon}></i>
              <span className="links_name">{item.name}</span>
            </Link>
            <span className="tooltip">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

