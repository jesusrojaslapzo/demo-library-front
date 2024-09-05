import { isOpenSidebarAtom } from '@/store/menuAtom';
import { useAtomValue } from 'jotai';
import { useState } from 'react';

const Sidebar = () => {
  //const [isOpen, setIsOpen] = useState(false);
  const isOpen = useAtomValue(isOpenSidebarAtom)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        {[
          { icon: 'bx bx-grid-alt', name: 'Dashboard' },
          { icon: 'bx bx-search', name: 'Explorador' },
          { icon: 'bx bx-book-open', name: 'Aprendizaje' },
          { icon: 'bx bx-user', name: 'Perfil' },
          { icon: 'bx bx-bullseye', name: 'Objetivos' },
          { icon: 'bx bx-heart', name: 'Comunidad' },
          { icon: 'bx bx-loader-circle', name: 'Evaluaciones' },
          { icon: 'bx bx-briefcase-alt', name: 'Oferta' },
        ].map((item, index) => (
          <li
            key={index}
            className={`li ${activeIndex === index ? 'activo' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <a href="#">
              <i className={item.icon}></i>
              <span className="links_name">{item.name}</span>
            </a>
            <span className="tooltip">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

