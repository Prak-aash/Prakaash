import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <button></button>
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
