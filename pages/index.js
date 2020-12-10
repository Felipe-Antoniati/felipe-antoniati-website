import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import Link from "next/link";
import cloudImg from "../images/cloud.png";

function Home() {
  return (
    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1 className="logo">
              Olá, eu sou <span>Felipe Antoniati</span>
            </h1>
            <p>
              Desenvolvedor web fullstack, responsável por
              <br /> criar Sites modernos e Aplicativos dinâmicos
            </p>
            <Link href="/about">
              <a className="btn btn-outline">Saiba mais</a>
            </Link>
          </div>
          <div className="showcase-form card">
            <h2>Solicite um orçamento</h2>
            <form>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="email"
                  placeholder="Insira seu E-mail"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="message"
                  placeholder="Descreva seu projeto, ou solicite um..."
                  required
                />
              </div>
              <Link href="/about">
                <a className="btn">Enviar</a>
              </Link>
            </form>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h3 className="stats-heading text-center my-1">
            Entre em contato agora mesmo e conheça as soluções
            <br></br> tecnologicas para sua empresa evoluir através da Internet
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <AiIcons.AiOutlineMobile size={70} style={{ color: "#047AED" }} />
              <h3>Aplicativos Multiplaforma</h3>
              <p>
                Sua empresa disponível e acessível
                <br></br>em qualquer dispositivo atual
              </p>
            </div>
            <div>
              <BsIcons.BsCloud size={75} style={{ color: "#047AED" }} />
              <h3>Hospedagem 100% Segura</h3>
              <p>
                Seus dados são armazenados
                <br></br>nos melhores servidores
              </p>
            </div>
            <div>
              <AiIcons.AiOutlineSnippets
                size={70}
                style={{ color: "#047AED" }}
              />
              <h3>Gerenciamento de Projeto</h3>
              <p>
                Mantenha-se sempre informado sobre
                <br></br>o desempenho do seu Aplicativo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Acesse o Portifolio</h2>
            <p className="lead my-1">
              Conheça os projetos desevolvidos por mim
              <br></br> para empresas e pessoas de sucesso
            </p>
            <Link href="/portifolio">
              <a className="btn btn-dark">Acessar</a>
            </Link>
          </div>
          <div className="image-cloud">
            <img src={cloudImg} />
          </div>
        </div>
      </section>

      <section className="techs">
        <h2 className="md text-center my2">Ferramentas de Trabalho</h2>
        <p>
          Estas são as tecnologias utilizadas para desenvolver os Aplicativos
        </p>
        <div className="container flex">
          <div className="card">
            <h4>Node.js</h4>
            <img src={require("../images/logos/node.png")} alt="Node JS" />
          </div>
          <div className="card">
            <h4>Python</h4>
            <img src={require("../images/logos/python.png")} alt="Node JS" />
          </div>
          <div className="card">
            <h4>Django</h4>
            <img src={require("../images/logos/django.png")} alt="PHP" />
          </div>
          <div className="card">
            <h4>React</h4>
            <img src={require("../images/logos/react.png")} alt="PHP" />
          </div>
          <div className="card">
            <h4>Typescript</h4>
            <img src={require("../images/logos/ts.png")} alt="PHP" />
          </div>
          <div className="card">
            <h4>Next.js</h4>
            <img src={require("../images/logos/next.png")} alt="PHP" />
          </div>
          {/* <div className="card">
            <h4>Vercel</h4>
            <img src={require("../images/logos/vercel.png")} alt="PHP" />
          </div> */}
        </div>
      </section>

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
    </>
  );
}
export default Home;
