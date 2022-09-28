import Head from 'next/head';
import Heading from '../components/Heading';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Sponsors from '../components/Sponsors';


export default function Home() {
    return (
        <div>
            <Head>
                <title>GunnHacks 8.0</title>
                <meta name="description" content="Make, Build, Create & Learn. It’s GunnHacks 9.0, Gunn’s 24‑hour high school hackathon." />
            </Head>

            <Heading />
            <About />
            <FAQ />
            <Sponsors />
        </div>
    )
}
