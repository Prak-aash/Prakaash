import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";

import Nfc1 from "../../public/work/Nfc1.png";
import Nfc2 from "../../public/work/Nfc2.png";

export default function Nfc() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Nfc Exploitation | Vulnerability Testing</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="max-w-screen ">
        <div className=" mx-auto pt-8 pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1 className={`mb-8 font-deca bg-clip-text selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              Nfc Exploitation
            </h1>
          </div> 
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4 className={`mb-10 font-deca bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}>
              Enhancing Android & Windows Security
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
                In the dynamic world of cybersecurity, the extensive use of Android devices and Windows machines increases vulnerability. 
                Recognizing the risks associated with NFC-enabled Android systems, I conducted comprehensive testing to address security gaps 
                and enhance protection against potential threats.
              </p>
            </div>
            
            <div className=" mx-auto flex flex-col ">
              <h3 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg font-medium mb-2">
                The Solution :
              </h3>
              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                NFC Exploitation and Injection
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                Scripted a payload embedded in an NFC chip to exploit Android systems through NFC communication. This payload is hosted on a
                cloud-based web server. It triggers when the programmed NFC chip contacts an Android device, providing attackers complete control 
                over the system, emphasizing the need to address NFC vulnerabilities and enhance Android security..
              </p>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Cross-Platform - Windows Exploitation
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                Though initially centered on Android vulnerability testing, with slight adjustments, the script can also exploit Windows systems. 
                This versatility enhances security measures, facilitating a thorough evaluation of potential threats across various platforms. 
              </p>

              <div className="mt-2 mb-2 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center text-base md:text-lg lg:text-lg xl:text-lg">
                Antivirus Bypass and System Compatibility
              </div>
              <p className="mb-4 font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-light">
                The script successfully evades antivirus programs, including Norton Antivirus Plus, on both Android and Windows systems. 
                Thorough testing verifies its effectiveness against Android versions 10–13 and Windows 10 & 11, underscoring the imperative to 
                address vulnerabilities in operating systems promptly.
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg font-medium mt-6 mb-4">
                Technologies Used :
              </h4>
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
              <p className="font-deca bg-gradient-to-br bg-clip-text selection:text-white/90 text-base md:text-lg lg:text-lg xl:text-lg mt-2 mb-12 font-light">
                The Android Vulnerability Testing project uncovers risks in NFC-enabled Android systems. Scripting a payload to exploit 
                vulnerabilities improves security. Cross-platform adaptability emphasizes broad cybersecurity. The script&apos;s ability to bypass 
                antivirus systems highlights the need to strengthen widely used operating systems.
              </p>
            </div>

          </div>
          <Image width="max" alt="Nfc" loading="lazy" src={Nfc1} className="drop-shadow-2xl mt-10"/>
          <Image width="max" alt="Nfc" loading="lazy" src={Nfc2} className="drop-shadow-2xl mt-10"/>
        </div>
      </main>
    </div>
  );
}
