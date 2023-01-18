import Section from '../../components/Section';

const mainPrizes = [{
    name: 'Top 3 Teams', 
    value: 
    [
        'Bluetooth Speaker', 
        'Gaming Mouse', 
        'Arduino Kit'
    ]
},
{
    name: 'Category Awards',
    value: [
        'Power Bank',
        'Echo Dot',
        'Adafruit Feather'
    ]
},
{
    name: 'Other Awards',
    value: [
        'Enter Key',
        'LED Lights'
    ]
},
{
    name: 'Sponsored Awards',
    value: [
        'Wolfram Award',
        'Leading Learners Expansion Packs',
        'AoPS'
    ]
}
];

const miniEventPrizes = [{
    name: 'Mini Event Awards',
    value: [
        'Cow Plush',
        'RadioShack Kit',
        'Magnetic Chess'
    ]
}
];

export default function Prizes() {
    return (
        <Section title="Prizes" id="prizes">
            <div className="prizes-section grid grid-rows-2 grid-cols-3 gap-3">
                <div className="prize-section top-3-teams" style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}>
                    <h3 className="text-xl font-bold mb-3">Top 3 Teams</h3>
                    <ul>
                        {mainPrizes[0].value.map(item => (
                            <li className="prize-item p-4 bg-white rounded-lg" key={item} style={{ borderRadius: "5px", border: "1px solid #e05c5c", marginBottom: "10px" }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="prize-section category-awards" style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}>
                    <h3 className="text-xl font-bold mb-3">Category Awards</h3>
                    <ul>
                        {mainPrizes[1].value.map(item => (
                            <li className="prize-item p-4 bg-white rounded-lg" key={item} style={{ borderRadius: "5px", border: "1px solid #e05c5c", marginBottom: "10px" }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="prize-section other-awards" style={{ gridRow: "1 / 2", gridColumn: "3 / 4" }}>
                    <h3 className="text-xl font-bold mb-3">Other Awards</h3>
                    <ul>
                        {mainPrizes[2].value.map(item => (
                            <li className="prize-item p-4 bg-white rounded-lg" key={item} style={{ borderRadius: "5px", border: "1px solid #e05c5c", marginBottom: "10px" }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="prize-section sponsored-awards" style={{ gridRow: "2 / 3", gridColumn: "1 / 2" }}>
                    <h3 className="text-xl font-bold mb-3">Sponsored Awards</h3>
                    <ul>
                        {mainPrizes[3].value.map(item => (
                            <li className="prize-item p-4 bg-white rounded-lg" key={item} style={{ borderRadius: "5px", border: "1px solid #e05c5c", marginBottom: "10px" }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="prize-section mini-event-awards" style={{ gridRow: "2 / 3", gridColumn: "2 / 3" }}>
                    <h3 className="text-xl font-bold mb-3">Mini Event Awards</h3>
                    <ul>
                        {miniEventPrizes[0].value.map(item => (
                            <li className="prize-item p-4 bg-white rounded-lg" key={item} style={{ borderRadius: "5px", border: "1px solid #e05c5c", marginBottom: "10px" }}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}