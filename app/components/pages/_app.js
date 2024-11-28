/* eslint-disable prettier/prettier */
import Navbar from '../components/Navbar.jsx';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
