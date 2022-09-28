export default function Heading() {
    return (
        <section id="heading" className="text-white text-center h-screen flex flex-col items-center justify-center p-5 bg-[url('/bg.svg')] bg-cover bg-center bg-fixed">
            <div className="flex flex-wrap justify-center gap-3 text-5xl sm:text-8xl font-['Overpass'] tracking-wider mb-2">
                <img className="w-12 h-12 sm:w-24 sm:h-24" src="/lambda.png" alt="lambda" />
                <span className="pt-2">GunnHacks 9.0</span>
            </div>
            <hr className="w-40 border-t-2 border-white mb-4" />
            <p className="mb-2">
                The ninth iteration of GunnHacks, Gunn High School's annual hackathon organized by United Computations.
            </p>
            <strong className="text-xl">January 21-22, 2023</strong>
        </section>
    )
}
