import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";

import Dine1 from "../../public/work/Dine1.png";
import Dine2 from "../../public/work/Dine1.png";

export default function Dine() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Dine In | Dining Reservations</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="max-w-screen ">
        <div className=" mx-auto pt-8 pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-8 font-deca bg-clip-text selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              Dine In
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4 className={`mb-10 font-deca bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}>
              Dining Reservations for a Seamless Experience
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className=" group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-blue-400 shadow-none hover:shadow-white select-none text-white shadow-blue-300">
              <Link href="https://github.com/Prak-aash?tab=repositories" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
                <FaGithub className="stroke-white stroke-2 group-hover:stroke-white " /><p>Code</p>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <div className="flex flex-col">
              <div className="mt-10 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium">
                The Problem :
              </div>
              <p className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-8 font-light">
                In the vibrant world of dining, restaurant experiences frequently involve delays and inefficiencies. To address this, 
                I aspired to craft an inventive platform streamlining reservations. The objective was to reduce wait times, enhance the dining 
                experience, and furnish users with an effective tool for managing reservations.
              </p>
            </div>
            
            <div className=" mx-auto flex flex-col ">
              <h3 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg font-medium mb-2">
                Our Solution :
              </h3>
              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Intuitive Interface
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The Dine In Web App features a user-friendly home page showcasing popular foods and nearby restaurants, utilizing 
                geolocation for a personalized touch. When a user picks a seat, they&apos;re directed to a detailed page with restaurant menus, 
                reviews, cuisines, opening hours, and average expenses for a comprehensive experience.
              </p>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Advanced Reservation System
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                A standout feature is the advanced seat reservation system, enabling users to book seats in advance, pick their preferred location, and smoothly proceed to the payment portal to confirm reservations. This not only diminishes waiting times but also offers users the convenience of selecting a comfortable dining spot.
              </p>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Efficient Seat Management Process
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                To optimize restaurant operations, the allotted seats are limited to a certain period. 
                This ensures that restaurants can manage their resources efficiently, serve more diners, and maintain a pleasant dining atmosphere. 
                The feature also guarantees that users can enjoy their meals without feeling rushed. Users can leave reviews and ratings for restaurants, 
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-6 mb-4">
                Technologies Used :
              </h4>
              <ul className="list-disc ml-4">
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  Front End: HTML5, Tailwind CSS, JavaScript, GSAP
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  Back End: Javascript UPi
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  Database: Firebase
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  Security: Google Auth Js
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-8 mb-2">
                Result :
              </div>
              <p className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-12 font-light">
                The Dine In Web App transforms dining experience with its intuitive interface and efficient reservation system, minimizing wait times. 
                Its comprehensive review system, allowing users to leave reviews and ratings for restaurants, improves decision-making and streamlines 
                restaurant operations This project significantly enhances the dining experience, showcasing technology&apos;s positive impact on society.
              </p>
            </div>

          </div>
          <Image width="max" alt="Dine" loading="lazy" src={Dine1} className="drop-shadow-2xl mt-10"/>
          <Image width="max" alt="Dine" loading="lazy" src={Dine2} className="drop-shadow-2xl mt-10"/>
        </div>
      </main>
    </div>
  );
}
