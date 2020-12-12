import React, { useState } from "react";
import Link from "next/link";
import { SidebarData } from "./SidebarData";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <div className="nav-left">
            <div className="social">
              <Link href="#">
                <a>
                  <FaIcons.FaGithub size={30} />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <FaIcons.FaLinkedin size={30} />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-rigth">
            <div className="menu-bars">
              <Link href="#">
                <a>
                  <FaIcons.FaBars onClick={showSidebar} size={30} />
                </a>
              </Link>
            </div>
            <div className="navbar-menu">
              <ul className="nav-list">
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
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <div className="header-navbar">
              <div className="social">
                <Link href="#">
                  <a>
                    <FaIcons.FaGithub size={30} />
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <FaIcons.FaLinkedin size={30} />
                  </a>
                </Link>
              </div>
              <li className="navbar-toggle">
                <Link href="#" className="menu-bars">
                  <a>
                    <AiIcons.AiOutlineClose size={30} />
                  </a>
                </Link>
              </li>
            </div>
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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
