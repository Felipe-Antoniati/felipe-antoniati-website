import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import serverImg from "../images/server.png";

function Services() {
  return (
    <>
      <Navbar />
      <section className="features-head bg-primary">
        <div className="container grid">
          <div className="showcase-text">
            <h1 className="title-portifolio">Serviços de qualidade</h1>
            <p className="lead">
              Solução completa, desde a criação até a publicação
              <br></br>processo ágil, seguro e transparente.
            </p>
          </div>
          <div className="image-server">
            <img src={serverImg} />
          </div>
        </div>
      </section>

      <section className="features-main my-2">
        <div className="container grid grid-3">
          <div className="card flex">
            <AiIcons.AiOutlineMobile size={75} />
            <h2>
              Aplicativos multiplataforma, tenha sua empresa disponível nas
              plataforma Android do Google e iOS da Apple.
            </h2>
          </div>
          <div className="card flex">
            <AiIcons.AiOutlineLaptop size={60} />
            <h2>
              Sites e Portais responsivos e acessíveis a partir de qualquer
              dispotivo atual
            </h2>
          </div>
          <div className="card flex">
            <AiIcons.AiOutlineCloudServer size={80} />
            <h2>Armazenamento seguro</h2>
          </div>
          <div className="card flex">
            <AiIcons.AiOutlineCarryOut size={60} />
            <h2>Prazo de entrega</h2>
          </div>
          <div className="card flex">
            <AiIcons.AiOutlineComment size={60} />
            <h2>Suporte pós venda</h2>
          </div>
          <div className="card flex">
            <BiIcons.BiCog size={80} />
            <h2>Manutenção e monitoramento</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Services;
