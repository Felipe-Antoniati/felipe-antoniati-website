import Link from "next/link";
import * as FaIcons from "react-icons/fa";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="container flex">
        <div className="social">
          <Link href="#">
            <a>
              <FaIcons.FaGithub 
                size={30} 
                color="#FBFBFF"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaIcons.FaLinkedin 
                size={30} 
                color="#FBFBFF"
              />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaIcons.FaInstagramSquare 
                size={30} 
                color="#FBFBFF"
              />
            </a>
          </Link>
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
