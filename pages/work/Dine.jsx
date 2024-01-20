import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";

import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import Dine1 from "../../public/work/Dine1.jpg";
import Dine2 from "../../public/work/Dine2.jpg";

export default function Dine() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Dine In | Reservation System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="28CEr-Sa87MiLKMI8u25Nbz5WiPDrbqNvdr2kYw-SJw" />
        <meta name="description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />
      </Head>
      <main className="max-w-screen ">
        <div className=" mx-auto pt-8 pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-8 font-deca bg-clip-text selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              Dine In
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-10 font-semibold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent selection:text-white/90 items-center mx-auto text-lg md:text-lg lg:text-xl xl:text-xl`}>
              Streamlining Dining Experience
            </h1>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className=" group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-blue-400 shadow-none hover:shadow-white select-none text-white shadow-blue-300">
              <Link href="https://dine-in-prakaash.netlify.app/" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
                <FaPlay className="stroke-white stroke-2 group-hover:stroke-white " /><h2>Demo</h2>
              </Link>
            </div>
            <div className=" group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-purple-400 shadow-none hover:shadow-white select-none text-white shadow-purple-300">
              <Link href="https://github.com/Prak-aash/Dine-In" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
                <FaGithub className="stroke-white stroke-2 group-hover:stroke-white " /><h2>Code</h2>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <div className="flex flex-col">
              <div className="mt-10 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium">
                The Problem :
              </div>
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-8 font-light">
                In the dynamic world of dining, restaurants experiences often include delays and inefficiencies. To address this, 
                I aimed to create an innovative platform to streamline reservations, with the goal of minimizing wait times, improving the dining 
                experience, and providing users with an efficient tool for managing reservations.
              </h1>
            </div>
            
            <div className=" mx-auto flex flex-col ">
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg font-medium mb-2">
                Our Solution :
              </h1>
              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Intuitive User Interface
              </div>
              <h1 className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The Dine In Web App features a user-friendly home page showcasing popular foods and nearby restaurants, utilizing 
                geolocation for a personalized touch. When a user picks a seat, they&apos;re directed to a detailed page with restaurant menus, 
                reviews, cuisines, opening hours, and average expenses for a comprehensive experience.
              </h1>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Advanced Reservation System
              </div>
              <h1 className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                A standout feature is the advanced seat reservation system, enabling users to book seats in advance, pick their preferred location,
                and smoothly proceed to the payment portal to confirm reservations. This not only diminishes waiting times but also offers users the 
                convenience of selecting a comfortable dining spot.
              </h1>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Efficient Seat Management
              </div>
              <h1 className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                To optimize restaurant operations, the allotted seats are limited to a certain period. 
                This approach ensures efficient resource management, accommodates more diners, and maintains a delightful dining ambiance. 
                The feature also guarantees that users can enjoy their meals without feeling rushed. Users can leave reviews and ratings for restaurants.
              </h1>
            </div>

            <div className="flex flex-col">
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-6 mb-4">
                Technologies Used :
              </h1>
              <ul className="list-disc ml-4">
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Front End:</span> HTML5, Tailwind CSS, JavaScript, GSAP
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Back End:</span> Javascript, UPI Integration
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Database: </span> Firebase 
                </li>                
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Security: </span> Google Authentication
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-8 mb-2">
                Result :
              </div>
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-12 font-light">
                The Dine In Web App revolutionizes the dining experience through its user friendly interface and efficient reservation system, minimizing wait times. 
                Its comprehensive review system, allowing users to leave reviews and ratings for restaurants, improves decision-making and streamlines 
                restaurant operations.
              </h1>
            </div>

          </div>
          <Image alt="prakaash murugesan" loading="lazy" src={Dine1} className="drop-shadow-2xl mt-10"/>
          <Image alt="prakaash murugesan" loading="lazy" src={Dine2} className="drop-shadow-2xl mt-10"/>
        </div>
      </main>
    </div>
  );
}
