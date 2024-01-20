import Head from "next/head";
import Image from "next/legacy/image";

import { useEffect } from "react";

import Blob from "@/components/Blob";
import Catg from "@/components/Catg";

import Achieve from "@/components/Achieve";
import Skill from "@/components/Skill";
import Proj from "@/components/Proj";

import love from "../public/love.svg";
import prakaash from "../public/Prakaash.jpg";

const Hero = () => {
  useEffect(() => {
    // console.clear();
    console.log.apply(console, [
      "%c $ Prakaash | Portfolio\n",
      "color: #38ef7d; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Prakaash Murugesan | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="28CEr-Sa87MiLKMI8u25Nbz5WiPDrbqNvdr2kYw-SJw" />
        <meta name="description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-2 lg:px-40 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-16">
            <Image
              width={130}
              height={130}
              src={prakaash}
              alt="prakaash murugesan"
              placeholder="prakaash murugesan"
              className="rounded-full select-none h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36"
              priority
            />
            <div className="flex flex-col ml-6">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl">
                Prakaash Murugesan
              </h1>
              <h1 className="font-light text-lg md:text-xl lg:text-2xl mt-2">
                I Transform Ideas Into Pixel Perfect Web Innovations.
              </h1>
            </div>
          </div>
          <Catg />
          <div className="mt-8 text-base md:text-xl lg:text-2xl">
            {/* <span className="px-2 py-1 font-medium select-none animate-text text-black bg-gradient-to-br from-orange-500 via-white to-green-500 rounded">Prakaash Murugesan</span>{" "} */}
            <h1 className="font-light sm:leading-6 md:leading-6 lg:leading-8">
                Hello World! I&apos;m A Full Stack Next.js Developer, Designer, And Cyber Security Analyst With 5+ Years Of Expertise.
                As A Cisco Certified Cybersecurity Ethical Hacker Specializing In Offensive Security, 
                I&apos;ve Trained Over 150 Students Through Practical Hands-on Sessions. Passionate About Creating Innovative Ideas And Securing Society. 
                Connect With Me On
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                onClick={() => navigator.clipboard.writeText("prak.aazh@gmail.com")}
                className="underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold hover:text-purple-400 cursor-pointer select"
              >
              {" "}prak.aazh@gmail.com
              </a>
            </h1>
          </div>

          <div className="flex items-center mx-auto justify-center mt-24 mb-12 select-none">
            <span className="font-black font-app text-2xl md:text-3xl tracking-wider mx-3 md:mx-5">
              eunoia
            </span>
            <div className="relative" style={{ top: '-4px' }}>
              <Image src={love} alt="prakaash murugesan" width="32" height="32" className="w-auto" />
            </div>
          </div>
        </div>
        <Proj />
        <Achieve />
        <Skill />
      </div>
    </>
  );
};

export default Hero;