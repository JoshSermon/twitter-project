import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { AppProps } from 'next/app';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Modal isOpen title="Test Modal"/>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}


// Stopped 41:56 - May 28th, 2023