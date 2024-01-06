import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <Head>
        <title>IntelliMinds</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
