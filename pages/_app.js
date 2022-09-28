import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
