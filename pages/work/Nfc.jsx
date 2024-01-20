import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";

import { FaGithub } from "react-icons/fa";

import Nfc1 from "../../public/work/Nfc1.jpg";
import Nfc2 from "../../public/work/Nfc2.jpg";

export default function Nfc() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Nfc Exploitation | Vulnerability Testing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="28CEr-Sa87MiLKMI8u25Nbz5WiPDrbqNvdr2kYw-SJw" />
        <meta name="description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />
      </Head>
      <main className="max-w-screen ">
        <div className=" mx-auto pt-8 pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-8 font-deca bg-clip-text selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              Nfc Exploitation
            </h1>
          </div> 
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-10 font-semibold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent selection:text-white/90 items-center mx-auto text-lg md:text-lg lg:text-xl xl:text-xl`}>
              Enhancing Android & Windows Security
            </h1>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center my-4">
            <div className=" group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 drop-shadow-lg bg-blue-400 shadow-none hover:shadow-white select-none text-white shadow-blue-300">
              <Link href="https://github.com/Prak-aash/Rec-On" target="_blank" className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  ">
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
                In the dynamic world of cybersecurity, the extensive use of Android devices and Windows machines increases vulnerability. 
                Recognizing the risks associated with NFC-enabled Android systems, I conducted comprehensive testing to address security gaps 
                and enhance protection against potential threats.
              </h1>
            </div>
            
            <div className=" mx-auto flex flex-col ">
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg font-medium mb-2">
                The Solution :
              </h1>
              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                NFC Exploitation and Injection
              </div>
              <h1 className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                Scripted a payload and embedded it in an NFC chip to exploit Android systems via NFC. This payload is triggered from a cloud 
                server when the embedded NFC chip contacts the Android device, granting attackers complete control over the system 
                and emphasising the need to address NFC vulnerabilities and enhance Android security.. 
              </h1>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Cross-Platform - Windows Exploitation
              </div>
              <h1 className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                Initially focused on testing Android vulnerabilities, the script&apos;s adaptability allows it to exploit Windows systems seamlessly 
                with minor adjustments. This versatility strengthens security measures, enabling a comprehensive evaluation of potential threats 
                across different platforms.
              </h1>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Antivirus Bypass and System Compatibility
              </div>
              <h1 className="mb-4 bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The script successfully evades antivirus programs, including Norton Antivirus Plus, on both Android and Windows systems. 
                Thorough testing verifies its effectiveness against Android versions 10–13 and Windows 10 & 11, underscoring the imperative to 
                address vulnerabilities in operating systems promptly.
              </h1>
            </div>

            <div className="flex flex-col">
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-6 mb-4">
                Technologies Used :
              </h1>
              <ul className="list-disc ml-4">
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Front End:</span>  HTML, CSS, JQuery
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Back End:</span> Python, Shell Scripting, Netcat
                </li>
                <li className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mb-2 font-light">
                  <span className="font-medium">Security:</span> Obfuscated Base64 Hashing
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-8 mb-2">
                Result :
              </div>
              <h1 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-12 font-light">
                The Android Vulnerability Testing project uncovers risks in NFC-enabled Android systems. Scripting a payload to exploit 
                vulnerabilities improves security. Cross-platform adaptability emphasizes broad cybersecurity. The script&apos;s ability to bypass 
                antivirus systems highlights the need to strengthen widely used operating systems.
              </h1>
            </div>

          </div>
          <Image alt="prakaash murugesan" loading="lazy" src={Nfc1} className="drop-shadow-2xl mt-10"/>
          <Image alt="prakaash murugesan" loading="lazy" src={Nfc2} className="drop-shadow-2xl mt-10"/>
        </div>
      </main>
    </div>
  );
}
