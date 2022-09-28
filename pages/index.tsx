import Head from 'next/head';
import About from '../components/About';


export default function Home() {
    return (
        <div>
            <Head>
                <title>GunnHacks 8.0</title>
                <meta name="description" content="Make, Build, Create & Learn. It’s GunnHacks 9.0, Gunn’s 24‑hour high school hackathon." />
            </Head>

            <About />
        </div>
    )
}
