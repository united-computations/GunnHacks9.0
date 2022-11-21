import Head from 'next/head';
import Header from '../components/Header';
import Heading from '../components/Heading';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Prizes from '../components/Prizes';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';


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
            <Prizes />
            <FAQ />
            <Sponsors />
            <Footer />
        </div>
    )
}
