// pages/_app.js
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/home.css";
import "../styles/memberhub.css";

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
