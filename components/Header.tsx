import {useScroll} from '../util/useScroll';


export default function Header() {
    const scroll = useScroll();

    return (
        <header className={'fixed text-white z-20 bg-black/40 top-0 inset-x-0 hidden sm:flex gap-6 items-center px-4 py-2 transition duration-200 backdrop-blur-sm ' + (scroll > 0 ? 'shadow-md' : 'hover:shadow-md')}>
            <a href="#">
                <img className="w-8 h-8" src="/lambda.png" alt="lambda" />
            </a>
            <a href="#about" className="no-underline">About</a>
            <a href="#schedule" className="no-underline">Schedule</a>
            <a href="#faq" className="no-underline">FAQ</a>
            <a href="#sponsors" className="no-underline">Sponsors</a>
        </header>
    )
}
