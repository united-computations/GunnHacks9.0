import Header from '../../components/Header';
import Heading from './Heading';
import About from './About';
import Schedule from './Schedule';
import Prizes from './Prizes';
import FAQ from './FAQ';
import Sponsors from './Sponsors';
import Footer from '../../components/Footer';


export default function Home() {
    return (
        <div>
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
