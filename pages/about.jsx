import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Head>
        <title>Vinh's Portfolio</title>
      </Head>
      <Navbar />
      <h1>About</h1>
    </div>
  );
}
