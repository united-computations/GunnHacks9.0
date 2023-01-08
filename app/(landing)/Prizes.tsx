import Section from '../../components/Section';

const prizes = [
  {
    name: 'Prize Pool',
    value: [
        'Adafruit Feather',
        'Arduino Kit x2',
        'Bluetooth Speaker',
        'Echo Dot x2',
        'Electronics Learning Lab',
        'Gaming Mouse x2',
        'Giant Enter Key',
        'JBL Clip 3',
        'LED Lights',
        'Magnetic Chess',
        'Portable Charger',
        'Power Bank',
        'Stack Overflow Macropad'
    ]
  },
  {
    name: 'Sponsored Prizes',
    value: [
      'Wolfram Award',
      'Leading Learners Expansion Packs',
      'AoPS'
    ]
  }
];

export default function Prizes() {
    return (
      <Section title="Prizes" id="prizes">
        <div className="flex w-full py-8">
          <div className="w-1/2 p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Prize Pool</h3>
            <ul className="grid grid-cols-3 gap-4">
              {prizes[0].value.map(item => (
                <li className="p-4 bg-white rounded-lg shadow-md" key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 p-4 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-3">Sponsored Prizes</h3>
              <p className="text-gray-600 mb-3">All participants will receive Free Wolfram|One Access for 30 days.</p>
              <ul className="grid grid-cols-3 gap-4">
                {prizes[1].value.map(item => (
                  <li className="p-4 bg-white rounded-lg shadow-md" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      );
    }