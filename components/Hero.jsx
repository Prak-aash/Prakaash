import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import Blob from "@/components/Blob";
import Catg from "@/components/Catg";

import Tech from "@/components/Tech";
import Projs from "@/components/Projs";
import Exp from "@/components/Exp";

import love from "../public/love.svg";
import about from "../public/Me.jpg";

const Hero = () => {
  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c $ cd home \n",
      "color: #38ef7d; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Prak-aash | Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-2 lg:px-40 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-14">
            <Image
              src={about}
              placeholder="blur"
              className="rounded-full select-none shadow-orange-100/60 drop-shadow-sm shadow-2xl h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 border-white border-2"
              alt="prakaash_murugesan"
              priority
            />
            <div className="flex flex-col ml-6">
              <h2 className="font-bold sm:text-3xl md:text-2xl lg:text-4xl">
                Prakaash Murugesan
              </h2>
              <h4 className="opacity-70 font-light xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                I love exploring new things!
              </h4>
            </div>
          </div>
          <Catg />
          <div className="mt-8 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              {/* <span className="font-medium select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded px-2 py-[0.05rem] ">
                INDIA
              </span>{" "} */}
                Blending Creativity and Technical Skills Committed to Continuous Learning, 
                Staying Updated on Industry Trends, Effectively Managing Projects Collaboratively or Independently, 
                and Passionate About Creating Innovative Ideas and Securing Society. 
                While I May Not Be a Widely Recognized Figure, I&apos;m Readily Available for Connection on My Social Media Platforms. 
                You Can Contact Me on the 
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                onClick={() => navigator.clipboard.writeText("prakaash3775@gmail.com")}
                className="underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold hover:text-purple-400 cursor-pointer select"
              >
              {" "}prakaash3775@gmail.com
              </a>
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-24 mb-12 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              eunoia
            </span>
            <Image src={love} alt="love" width="30" className="-mt-7 w-auto" />
          </div>
        </div>
        <Projs />
        <Exp />
        <Tech />
      </div>
    </>
  );
};

export default Hero;