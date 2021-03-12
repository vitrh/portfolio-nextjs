import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import About from "./about";
import Contact from "./contact";
import { useTheme } from "next-theme-mode";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";

export default function Home() {
  const { colorMode, setColorMode } = useTheme();

  const isDark = colorMode === "dark" ? true : false;

  const changeTheme = () => {
    isDark ? setColorMode("light") : setColorMode("dark");
  };

  return (
    <div>
      <button onClick={() => changeTheme()}>Change Mode</button>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>Vinh's Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Work />
      {/* <Footer /> */}
    </div>
  );
}
