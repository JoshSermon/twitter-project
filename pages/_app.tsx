import Layout from '../components/Layout';
// import Modal from '../components/Modal';
import { AppProps } from 'next/app';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal actionLabel="Submit" isOpen title="Test Modal"/> */}
  <RegisterModal /> 
  <LoginModal />
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )
}