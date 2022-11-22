import {RiFacebookFill, RiInstagramFill} from 'react-icons/ri';
import {FaEnvelope} from 'react-icons/fa';


export default function Heading() {
    return (
        <section id="heading" className="text-white text-center h-screen relative flex flex-col items-center justify-center p-5 bg-[url('/bg.svg')] bg-cover bg-center bg-fixed">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 text-3xl sm:text-6xl font-['Press_Start_2P'] mb-2">
                <img className="w-12 h-12 sm:w-24 sm:h-24" src="/pixel-lambda.png" alt="lambda" />
                <span className="pt-2">GunnHacks 9.0</span>
            </div>
            <hr className="w-40 border-t-2 border-white mb-4" />
            <p className="mb-2">
                The ninth iteration of GunnHacks, Gunn High School's annual hackathon organized by United Computations.
            </p>
            <strong className="text-xl font-mono mb-4">January 21-22, 2023</strong>

            <div className="flex gap-4 text-2xl">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/GunnHacks">
                    <RiFacebookFill />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gunn.hacks/">
                    <RiInstagramFill />
                </a>
                <a href="mailto:ghshacks@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </section>
    )
}
