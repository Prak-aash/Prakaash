import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";

import arachne1 from "../../public/Arachne.jpg";
import arachne2 from "../../public/work/Arachne2.png";

export default function Arachne() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Arachne | Dark Web Suite</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="max-w-screen ">
        <div className=" mx-auto pt-8 pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-8 font-deca bg-clip-text selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              Arachne
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4 className={`mb-10 font-deca bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}>
              Dark Web Monitoring Tool
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className=" group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-blue-400 shadow-none hover:shadow-white select-none text-white shadow-blue-300">
              <Link href="https://github.com/Prak-aash?tab=repositories" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
                <FaGithub className="stroke-white stroke-2 group-hover:stroke-white"/><p>Code</p>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <div className="flex flex-col">
              <div className="mt-10 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium">
                The Problem :
              </div>
              <p className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-8 font-light">
                In the shadows of the internet, criminal activities thrive on the dark web&apos;s anonymity. As a cybersec expert, I aimed to 
                tackle this challenge by creating a suite that proactively scrapes and analyzes dark web content, categorizes it, and instantly 
                alerts authorities, giving rise to the Dark Web Crawler project.
              </p>
            </div>
            
            <div className=" mx-auto flex flex-col ">
              <h3 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg font-medium mb-2">
                Our Solution :
              </h3>
              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Clear Net Mode - Shedding Light on the Shadows :
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The Clear Net mode was designed to bridge the gap between the surface web and the dark web. 
                By allowing users to input categorical keywords, the crawler scrapes the surface web for accessible dark web content. 
                This content is then updated in a proprietary database, creating a foundation for further analysis.
              </p>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Dark Net Mode - Contextual Scraping and Intelligent Analysis :
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The Dark Net mode is the project&apos;s core. Users enter categorical keywords, initiating a crawl across 16 dark web engines for 
                associated onion sites. Using Natural Language Processing (NLP), specific keywords transform into contextual data for scraping. 
                The proprietary database is enriched, generating a comprehensive report with rankings and graphical representations of the category.
              </p>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Real Time Alert System - Empowering Law Enforcement :
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The Dark Web Crawler empowers law enforcement with a real-time alert system, notifying authorities when predefined thresholds 
                for specific category keywords change, indicating risks in the dark web market. Designed for Linux compatibility, the crawler 
                seamlessly integrates with Tor services and VPN, ensuring effective and private dark web crawling.
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-6 mb-4">
                Technologies Used :
              </h4>
              <ul className="list-disc ml-4">
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Front End:</span>  HTML5, Tailwind CSS
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Back End:</span> Python, Flask
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Security: </span> Tor and VPN Integration
                </li>                
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Web Scraping: </span> Beautiful Soup (BS4), Selenium
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Compatibility: </span> Windows and Linux-based Systems
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="mt-8 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium">
                Result :
              </div>
              <p className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-12 font-light">
                The Dark Web Crawler, a robust tool for law enforcement, monitors and categorizes potential criminal activities. Its real-time 
                alert system flags potential risks when activities exceed defined thresholds. Advanced scraping and NLP offer a refined 
                perspective, elevating traditional crawlers.
              </p>
            </div>

          </div>
          <Image width="max" alt="Arachne" loading="lazy" src={arachne1} className="drop-shadow-2xl mt-10"/>
          <Image width="max" alt="Arachne" loading="lazy" src={arachne2} className="drop-shadow-2xl mt-10"/>
        </div>
      </main>
    </div>
  );
}
