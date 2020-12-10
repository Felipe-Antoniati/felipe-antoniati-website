import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="container grid grid-3">
        <div>
          <h1>Felipe Antoniati</h1>
          <p>&copy; Copyright 2020</p>
        </div>
        <div className="contact-footer">
          <div className="icon-footer">
            <AiIcons.AiOutlineMail size={30} color="#FBFBFF" />
            <h3>antoniati.felipe@gmail.com</h3>
          </div>
          <div className="icon-footer">
            <HiIcons.HiOutlineLocationMarker size={30} color="#FBFBFF" />
            <h3>Bertioga - SP</h3>
          </div>
        </div>
        <div className="salmos">
          <h2>
            "Todas as coisas cooperam para o bem daqueles que amam à Deus."
            <span>(Rm 8:28)</span>
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
