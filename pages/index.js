import Link from "next/link";

function Home() {
  return (
    <section className="showcase">
      <h1>Home</h1>
      <Link href="/services">
        <a>Acessar página Services</a>
      </Link>
    </section>
  );
}
export default Home;