import Head from "next/head";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>ASA Plumbing</title>
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
                <About />
                <Services />
                <Contact />
            </main>
        </div>
    );
}
