import '../styles/bootstrap.min (1).css';
import '../styles/globals.scss'


// Components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
