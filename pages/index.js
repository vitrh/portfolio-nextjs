import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import About from "./about";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>Vinh's Portfolio</title>
      </Head>
      <Navbar />
      {/* <Footer /> */}
    </div>
  );
}
