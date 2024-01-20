import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";

import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import Farm1 from "../../public/work/Farm1.jpg";
import Farm2 from "../../public/work/Farm2.jpg";

export default function Farm() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Farm In | Agriculture</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="28CEr-Sa87MiLKMI8u25Nbz5WiPDrbqNvdr2kYw-SJw" />
        <meta name="description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />
      </Head>
      <main className="max-w-screen ">
        <div className=" mx-auto pt-8 pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-8 font-deca bg-clip-text selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              Farm In
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h className={`mb-10 font-semibold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent selection:text-white/90 items-center mx-auto text-lg md:text-lg lg:text-xl xl:text-xl`}>
              Agriculture Meets Technology
              {/* Revolutionizing Agriculture Smartly. */}
            </h>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className=" group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-blue-400 shadow-none hover:shadow-white select-none text-white shadow-blue-300">
              <Link href="https://farm-in-prakaash.netlify.app/" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
                <FaPlay className="stroke-white stroke-2 group-hover:stroke-white " /><h2>Demo</h2>
              </Link>
            </div>
            <div className=" group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-purple-400 shadow-none hover:shadow-white select-none text-white shadow-purple-300">
              <Link href="https://github.com/Prak-aash/Farm-In" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
                <FaGithub className="stroke-white stroke-2 group-hover:stroke-white " /><h2>Code</h2>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <div className="flex flex-col">
              <div className="mt-10 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium">
                The Problem :
              </div>
              <h className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-8 font-light">
                In the realm of Agriculture, Farmers face challenges that complicate crop cultivation. A user-friendly web app streamlines decisions for farmers, addressing challenges from cultivation to profits, aiming to boost efficiency in the agricultural cycle.
              </h>
            </div>
            
            <div className=" mx-auto flex flex-col ">
              <h className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg font-medium mb-2">
                Our Solution :
              </h>
              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Automated Input Processing
              </div>
              <h className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The Farm In Web App features a built-in mechanism that retrieves user data, like the current location. This 
                information is then used to compute soil type, season, climate, temperature, wind speed, and humidity, all without 
                any manual input from the user.
              </h>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                AI-Driven Crop Recommendations
              </div>
              <h className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                Employing AI technology, the system reviews data derived from the user&apos;s location, recommending three suitable crops. Users 
                can choose from these options, streamlining crop choices and improving overall ease of decision-making.
              </h>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Interactive Crop Timeline
              </div>
              <h className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                After selecting a crop, Users are provided with a comprehensive timeline detailing crucial phases like Land Preparation, 
                Sowing, Cultivation, and Harvesting. This information helps users understand the agricultural process and the timeframes for each phase.
              </h>
            </div>

            <div className="flex flex-col">
              <h className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-6 mb-4">
                Technologies Used :
              </h>
              <ul className="list-disc ml-4">
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Front End:</span>  HTML5, Tailwind CSS
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Back End:</span> Javascript
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Database:</span> Firebase, JSON Formats
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">APIs:</span> Geolocation API, Open Weather API
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-8 mb-2">
                Result :
              </div>
              <h className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-12 font-light">
                Farm In is a comprehensive SaaS platform that transforms agriculture with AI-driven crop recommendations. Simplifying farming complexities with features like weather alerts, resulting in improved yields, and lowered expenses.
              </h>
            </div>

          </div>
          <Image alt="prakaash murugesan" loading="lazy" src={Farm1} className="drop-shadow-2xl mt-10"/>
          <Image alt="prakaash murugesan" loading="lazy" src={Farm2} className="drop-shadow-2xl mt-10"/>
        </div>
      </main>
    </div>
  );
}
