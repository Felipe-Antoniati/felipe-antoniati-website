import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React, { useState } from "react";
import { SidebarData } from "./SidebarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="wrapper">
      <div className="container flex">
        <div className="social">
          <Link href="#">
            <a>
              <FaIcons.FaGithub size={30} color="#FBFBFF" />
            </a>
          </Link>
          <Link href="#">
            <a>
              <FaIcons.FaLinkedin size={30} color="#FBFBFF" />
            </a>
          </Link>
        </div>
        <div className="menu-bars">
          <Link href="#">
            <a>
              <FaIcons.FaBars onClick={showSidebar} size={30} color="#FBFBFF" />
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
          </ul>
        </nav>
      </div>
      <div className="nav-sidebar-menu">
        <nav className={sidebar ? "nav-sidebar active" : "nav-hamburguer"}>
          <ul className="nav-sidebar-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link href="#" className="menu-bars">
                <a>
                  <AiIcons.AiOutlineClose />
                </a>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    <a>
                      <span className="cName">{item.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
