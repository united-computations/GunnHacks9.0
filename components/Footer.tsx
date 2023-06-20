import Section from './Section';


export default function Footer() {
    const previousYears = ['8.0', '7.0', '6.0', /* '5.0', */ '4.0', '3.0', '2.0', '1.0'];

    return (
        <Section red>
            <div className="relative before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-20 before:bg-gradient-to-l before:from-transparent before:to-theme before:pointer-events-none after:absolute after:top-0 after:right-0 after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:to-theme after:pointer-events-none">
                <div className="relative flex text-xl pt-12 pb-4 px-12 overflow-x-auto snap-x">
                    {previousYears.map(year => (
                        <FooterItem year={year} key={year} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

function FooterItem(props: {year: string}) {
    const {year} = props;
    return (
        <div className="relative pt-4 flex-none">
            <h5 className="absolute inset-x-0 -top-8 font-bold">{year}</h5>
            <div className="w-2 h-2 rounded-full bg-white absolute inset-x-0 mx-auto -top-1" />
            <hr className="absolute border-t border-white w-full -top-[0.04rem]" />
            <a href={`https://${year}.gunnhacks.com`} target="_blank" rel="noopener noreferrer" className="block snap-center no-underline rounded-md bg-zinc-900 shadow-lg overflow-hidden border border-zinc-700/50 hover:border-zinc-100 transition duration-200 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9] mx-4">
                <img src={`/past-years/${year}.jpg`} alt={year} className="w-72 h-44 object-cover" />
                <div className="px-5 py-3 flex gap-3 items-center text-sm">
                    <h5 className="font-mono font-medium">{year}</h5>
                    <p className="text-secondary">aaaa</p>
                </div>
            </a>
        </div>
    )
}
