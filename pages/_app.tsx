import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { AppProps } from 'next/app';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Modal />
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}
