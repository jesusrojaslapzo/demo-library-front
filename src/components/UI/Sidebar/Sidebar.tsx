const Sidebar = () => {
  return (
    <div className="sidebar">

      <ul className="nav-list">

        <li>
          <a href="#">
            <i className='bx bx-grid-alt'></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-search'></i>
            <span className="links_name">Explorador</span>
          </a>
          <span className="tooltip">Explorador</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-book-open'></i>
            <span className="links_name">Aprendizaje</span>
          </a>
          <span className="tooltip">Aprendizaje</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-user'></i>
            <span className="links_name">Perfil</span>
          </a>
          <span className="tooltip">Perfil</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-bullseye'></i>
            <span className="links_name">Objetivos</span>
          </a>
          <span className="tooltip">Objetivos</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-heart'></i>
            <span className="links_name">Comunidad</span>
          </a>
          <span className="tooltip">Comunidad</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-loader-circle'></i>
            <span className="links_name">Evaluaciones</span>
          </a>
          <span className="tooltip">Evaluaciones</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-briefcase-alt'></i>
            <span className="links_name">Oferta</span>
          </a>
          <span className="tooltip">Oferta</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img src="./img/Avatar.png" alt="" />
            <div className="name_job">
              <div className="name">Alejandro Rodriguez</div>
              <div className="job">Web designer</div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  )
}

export default Sidebar
