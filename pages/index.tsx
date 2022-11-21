import Head from 'next/head';
import Header from '../components/Header';
import Heading from '../components/Heading';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import Schedule from '../components/Schedule';


export default function Home() {
    return (
        <div>
            <Head>
                <title>GunnHacks 9.0</title>
                <meta name="description" content="Make, Build, Create & Learn. It’s GunnHacks 9.0, Gunn’s 24‑hour high school hackathon." />
            </Head>

            <Header />
            <Heading />
            <About />
            <Schedule />
            <FAQ />
            <Sponsors />
            <Footer />
        </div>
    )
}
