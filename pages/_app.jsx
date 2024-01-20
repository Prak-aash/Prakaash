import { ThemeProvider } from "next-themes";
import Foot from "@/components/Foot";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <button aria-label="Prakaash Murugesan"></button>
        <Component {...pageProps} />
        <Foot/>
      </main>
    </ThemeProvider>
  );
}