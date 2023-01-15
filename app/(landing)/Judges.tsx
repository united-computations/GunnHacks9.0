import Section from '../../components/Section';
import Judge from './Judge';


export default function Judges() {
    return (
        <Section title="Judges" id="judges">
            <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
                <Judge name="Gaurav Phapale">
                    LinkedIn, Senior Software Engineering Manager
                </Judge>
                <Judge name="Sanjay Verma">
                    Alix Partners, Managing Director
                </Judge>
                <Judge name="Yogesh Sandhuja">
                    HERE Tech, VP of Product/GM Platform & Marketplace
                </Judge>
                <Judge name="Ratnakar Malla" src="/judges/ratnakar-malla.jpg">
                    Senior Director, Oracle Health & AI
                </Judge>
                <Judge name="Mohan Gummalam">
                    Hermis, Inc., Co-founder and CEO
                </Judge>
                <Judge name="Arpana Tiwari" src="/judges/arpana-tiwari.jpg">
                    Adobe, SEO. Walmart, Ex-head of SEO
                </Judge>
                <Judge name="Anurag Singhal" src="/judges/anurag-singhal.png">
                    Founder & CEO, Quattr Inc.
                </Judge>
                <Judge name="Timothy Herchen" src="/judges/timothy-herchen.jpg">
                    Foothill College, Sophomore
                </Judge>
            </div>
        </Section>
    )
}
