// pages/_app.js
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/home.css";
import "../styles/membership.css";
import "../styles/music.css";
import "../styles/services.css";
import "../styles/memberhub.css";
import "../styles/patreon.css";
import "../styles/partners.css";
import "../styles/partners.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
