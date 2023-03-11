import {Overpass} from 'next/font/google';
import {RiFacebookFill, RiInstagramFill, RiDiscordFill} from 'react-icons/ri';
import {FaEnvelope} from 'react-icons/fa';


const overpass = Overpass({
    subsets: ['latin']
});

export default function Heading() {
    return (
        <section id="heading" className="text-white text-center h-screen relative flex flex-col items-center justify-center p-5">
            <div className={'flex flex-wrap justify-center gap-3 text-5xl sm:text-8xl tracking-wider mb-2 ' + overpass.className}>
                <img className="w-12 h-12 sm:w-24 sm:h-24" src="/lambda.png" alt="lambda" />
                <span className="pt-2">GunnHacks 9.0</span>
            </div>
            <hr className="w-40 border-t-2 border-white mb-4" />
            <p className="mb-2">
                The ninth iteration of GunnHacks, Gunn High School's annual hackathon organized by United Computations.
            </p>
            <strong className="text-xl mb-4">January 21-22, 2023</strong>

            <div className="flex gap-4 text-2xl">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/GunnHacks" aria-label="Facebook">
                    <RiFacebookFill />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gunn.hacks/" aria-label="Instagram">
                    <RiInstagramFill />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/pyJmTpRWZJ" aria-label="Instagram">
                    <RiDiscordFill />
                </a>
                <a href="mailto:ghshacks@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
            </div>
        </section>
    )
}
