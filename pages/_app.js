// pages/_app.js
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/home.css";
import "../styles/memberhub.css";
import "../styles/membership.css";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
