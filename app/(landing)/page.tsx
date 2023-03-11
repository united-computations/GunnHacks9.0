import type {Metadata} from 'next';
import Header from '../../components/Header';
import Heading from './Heading';
import About from './About';
import Schedule from './Schedule';
import Prizes from './Prizes';
import Judges from './Judges';
import FAQ from './FAQ';
import Sponsors from './Sponsors';
import Footer from '../../components/Footer';


export const metadata: Metadata = {
    title: 'GunnHacks 9.0'
}

export default function Home() {
    return (
        <div>
            <Header />
            <Heading />
            <About />
            <Schedule />
            <Prizes />
            <Judges />
            <FAQ />
            <Sponsors />
            <Footer />
        </div>
    )
}
