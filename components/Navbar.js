import Link from "next/link";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="container flex">
      <div className="social-media">
        <div className="perfil">
          <a>Perfil</a>
        </div>
        <a>Github</a>
        <a>Likedin</a>
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
              <a>Serviços</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/portifolio">
              <a>Portifolio</a>
            </Link>
          </li>          
          <li className="nav-item">
            <Link href="/portifolio">
              <a>Sobre</a>
            </Link>
          </li>          
          <li className="nav-item">
            <Link href="/portifolio">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
