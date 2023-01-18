import {ReactNode} from 'react';
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
}];

export default function Prizes() {
    return (
        <Section title="Prizes" id="prizes">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {mainPrizes.map(prize => (
                    <div>
                        <h3 className="text-xl font-bold mb-3">{prize.name}</h3>
                        <ul>
                            {prize.value.map(item => (
                                <Prize key={item}>{item}</Prize>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h3 className="text-xl font-bold mb-3">Mini Event Awards</h3>
                    <ul>
                        {miniEventPrizes[0].value.map(item => (
                            <Prize key={item}>{item}</Prize>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
}

function Prize(props: {children: ReactNode}) {
    return (
        <li className="p-4 bg-white rounded-lg mb-2.5 rounded-md border border-theme">
            {props.children}
        </li>
    )
}
