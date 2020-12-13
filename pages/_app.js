import Layout from "../components/Layout";
import "../styles/utilities.css";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/Select.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
