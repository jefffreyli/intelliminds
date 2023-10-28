import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <Head>
        <title>IntelliMinds</title>
        <link rel="icon" href="/logo.png" />
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default MyApp;
