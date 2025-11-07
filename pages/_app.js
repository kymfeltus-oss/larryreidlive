import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }){
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <div className="footer container" style={{opacity:.7}}>© {new Date().getFullYear()} Larry Reid Live LLC — Educate. Entertain. Enlighten.</div>
    </>
  );
}
