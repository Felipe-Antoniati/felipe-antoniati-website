import Link from "next/link";

function Home() {
  return (
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
  );
}
export default Home;
