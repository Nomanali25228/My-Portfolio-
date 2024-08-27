import Image from "next/image";
import Head from "next/head";
import Nav  from "@/app/(component)/nav/Nav";
import Header from "@/app/(component)/header/Header"
import About from "@/app/(component)/about/About"
import Services from '@/app/(component)/services/Services'
import Skills from "@/app/(component)/skills/Skills"
import Portfolio from '@/app/(component)/portfolio/Portfolio'
import Contect from '@/app/(component)/contect/Contect'
import Footer from '@/app/(component)/footer/Footer'
export default function Home() {
  return (
    <>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>Portfolio</title>
      </head>

      {/* all component */}
      <Nav />
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contect/>
      <Footer/>
    </>
  );
}
