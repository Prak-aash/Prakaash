import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Logos */}
        <link rel="icon" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />

        {/* Common SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Prakaash Murugesan" />
        <meta name="title" content="Prakaash Murugesan Portfolio" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Prak-aash, Prak-aash Portfolio, Prakaash, Prakaash Portfolio, Prakaash Murugesan, Prakaash Murugesan Portfolio, Prak-aash Murugesan, Prak-aash Murugesan Portfolio, Developer Portfolio, Designer Portfolio, CyberSecurity Speaker Portfolio, Developer, Designer, CyberSec Speaker Portfolio, Photographer Portfolio, Dark Web Enthusiast Portfolio, Next Js Developer Portfolio, Red Teamer Portfolio, National Hackathon Winner Portfolio, Cisco Certified Ethical Hacker Portfolio." />
        <meta name="description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prakaash Murugesan" />
        <meta property="og:url" content="https://prakaash.netlify.app/" />
        <meta property="og:image" content="https://prakaash.netlify.app/" />
        <meta property="og:description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />

        {/* Twitter Card Meta Tags  */}
        <meta name="twitter:site" content="@Prakaash_3_75" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prakaash Murugesan" />
        <meta name="twitter:image" content="https://prakaash.netlify.app/" />
        <meta name="twitter:description" content="Immerse Yourself In Prakaash Murugesan's Portfolio, A Fusion Of Full Stack Development, UI UX Design, And Cybersecurity Speaking Mastery. With A Versatile Background As A Next.js Full Stack Developer, Ui Ux Designer, Cyber Security Speaker, Photographer, Dark Web Enthusiast, Cisco Certified Ethical Hacker, Red Teamer, And National Hackathon Champion, Prak-aash Seamlessly Blends Creativity And Technical Skills." />

        {/* Additional SEO Meta Tags */}
        <link href="https://prakaash.netlify.app/" rel="canonical" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" />

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      </Head>
      <body className="font-out mx-auto bg-[#242424] overflow-x-hidden lg:transform-gpu">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
