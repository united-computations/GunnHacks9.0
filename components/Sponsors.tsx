import Section from './Section';
import Sponsor from './Sponsor';


export default function Sponsors() {
    return (
        <Section title="Sponsors" id="sponsors">
            <p>
                To sponsor our event, email us at <a href="mailto:ghshacks@gmail.com">ghshacks@gmail.com</a>.
                Find our sponsorship prospectus <a target="_blank" rel="noopener noreferrer" href="/docs/sponsorship_prospectus.pdf">here</a>.
            </p>

            <div className="pt-8 pb-2 flex flex-wrap items-center justify-center">
                <Sponsor href="https://www.wolfram.com" src="/sponsors/wolfram.svg" alt="Wolfram" />
                <Sponsor href="https://artofproblemsolving.com/" src="/sponsors/aops.png" alt="AoPS" />
            </div>
        </Section>
    )
}
