import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import * as AiIcons from "react-icons/ai";
import mobileMockupImg from "../images/mobile-mockup.png";
import homeImg from "../images/apps/home.png";

function Services() {
  return (
    <>
      <Navbar />
      <section className="portifolio-head bg-primary pry-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Portifolio</h1>
            <p className="lead">
              Este é meu portifolio, aqui você vai encontar todos projetos criados por mim para pessoas e empresas de sucesso
            </p>
          </div>
          <div className="image-portifolio">
            <img src={mobileMockupImg} alt="Mobile Mockup" />
          </div>
        </div>
      </section>

      <section className="portifolio-main my-4">
        <div className="container grid">
          <div className="card bg-light card-port">
            <div className="header-card-port">
              <h2>Happy</h2>
              <p>
                Aplicativo desenvolvido para levar felicidade às crianças de
                Casas Sociais por meio da conexão com pessoas que desejam
                ajudar.
              </p>
              <img src={homeImg} alt="Happy" />
            </div>
            <div className="alert alert-sucessfull">
              <AiIcons.AiOutlineSmile size={35} color="#FBFBFF" />
              <p>
                Projeto Open-source, totalmente gratuito e livre para
                modificações.
              </p>
            </div>
            <h4>Descrição</h4>
            <p>
              Este é um projeto open-source, desenvolvido durante um evento
              online gratuito, apresentado pela Rocketseat. O conteúdo é exibido
              durante 1 semana, e em cada dia da semana, é apresentado uma etapa
              para o desenvolvimento do projeto, construímos desde o Back-end
              até o Front-end Web e Mobile, utilizando as tecnologias:<br></br>{" "}
              NodeJS + ReactJS + React Native.
            </p>
            <Link href="/about">
              <a className="btn">
                <AiIcons.AiOutlineGlobal size={25} color="#FBFBFF" />
                <span>Acesse o Site de exemplo</span>
              </a>
            </Link>
            <h4>Instalação</h4>
            <p>Clone o repositório</p>
            <pre>
              <code>
                $ git clone https://github.com/felipe-antoniati/happy-nlw3
              </code>
            </pre>
            <p>Instale as depêndencias do back-end</p>
            <pre>
              <code>$ cd happy-nlw3/server &amp;&amp; yarn install</code>
            </pre>
            <p>Instale as depêndencias do front-end</p>
            <pre>
              <code>
                $ cd happy-nlw3/client/web &amp;&amp; yarn install
                <br />
                <br />$ cd happy-nlw3/client/mobile &amp;&amp; yarn install
              </code>
            </pre>
            <div className="alert alert-error">
              <AiIcons.AiOutlineWarning size={25} color="#FBFBFF" />
              <p>
                É preciso que o Back-end esteja em execução para funcionar o
                Front-end.
              </p>
            </div>
            <p>Execute o Servidor (back-end)</p>
            <pre>
              <code>$ cd happy-nlw3/server &amp;&amp; yarn dev</code>
            </pre>
            <p>Inicie as Aplicações (front-end)</p>
            <pre>
              <code>
                $ cd happy-nlw3/client/web &amp;&amp; yarn dev
                <br />
                <br />$ cd happy-nlw3/client/mobile &amp;&amp; expo start
              </code>
            </pre>
            <h4>Requerimentos</h4>
            <ul>
              <li>Windows 10, Mac OS, Linux</li>
              <li>Node.js v12 ou superior</li>
              <li>Git</li>
              <li>Expo</li>
            </ul>
          </div>
          <div className="card bg-light p-3 card-apps">
            <h3 className="my-2">Projetos Open-source</h3>
            <nav>
              <ul>
                <li>
                  <Link href="#">
                    <a className="text-primary">Happy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Proffy</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Ecoleta</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Be the Hero</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Services;
