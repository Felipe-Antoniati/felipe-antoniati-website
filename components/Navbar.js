import Link from "next/link";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="container flex">
        <h1 className="logo">
          Felipe <span>Antoniati</span>
        </h1>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
          <Link href="/">
            <a>Home</a>
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
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Navbar;
