import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import About from "./about";
import Contact from "./contact";
import { useTheme } from "next-theme-mode";
import { Hero } from "../components/Hero";
import { Work } from "../components/Work";
import { SectionContainer } from "../components/SectionContainer";

export default function Home() {
  const { colorMode, setColorMode } = useTheme();

  const isDark = colorMode === "dark" ? true : false;

  const changeTheme = () => {
    isDark ? setColorMode("light") : setColorMode("dark");
  };

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <title>Vinh's Portfolio</title>
      </Head>

      <Navbar />

      <SectionContainer>
        <Hero />
      </SectionContainer>
      <SectionContainer>
        <Work />
      </SectionContainer>
      <SectionContainer></SectionContainer>
      <button onClick={() => changeTheme()}>Change Mode</button>
      {/* <Footer /> */}
    </div>
  );
}
