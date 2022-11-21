import {ReactNode} from 'react';
import Section from './Section';


export default function Schedule() {
    return (
        <Section red title="Tentative Schedule">
            <div className="flex flex-wrap gap-8">
                <ScheduleDay name="January 21">
                    <ScheduleItem from="1:30 PM">Doors open</ScheduleItem>
                    <ScheduleItem from="2:00 PM" to="2:30 PM">Opening ceremony</ScheduleItem>
                    <ScheduleItem from="2:30 PM" to="3:00 PM">Team formation</ScheduleItem>
                    <ScheduleItem from="3:00 PM" bold>Commence hacking!</ScheduleItem>
                    <ScheduleItem from="3:30 PM" to="5:00 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem from="5:00 PM" to="6:30 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem from="6:30 PM" to="7:30 PM">Dinner</ScheduleItem>
                    <ScheduleItem from="7:00 PM" to="8:30 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem from="8:30 PM" to="10:00 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem from="10:00 PM" to="11:30 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem from="11:30 PM" to="1:30 AM">Snacks & movie night</ScheduleItem>
                </ScheduleDay>
                <ScheduleDay name="January 22">
                    <ScheduleItem from="8:00 AM" to="9:00 AM">Breakfast</ScheduleItem>
                    <ScheduleItem from="9:00 AM" to="10:00 AM">[Event]</ScheduleItem>
                    <ScheduleItem from="12:00 PM" to="1:00 PM">Lunch</ScheduleItem>
                    <ScheduleItem from="3:00 PM" bold>Hacking closes</ScheduleItem>
                    <ScheduleItem from="3:00 PM" to="5:00 PM">Presentations & demos (judging)</ScheduleItem>
                    <ScheduleItem from="3:00 PM" to="5:00 PM">[Programming workshops & events]</ScheduleItem>
                    <ScheduleItem from="5:00 PM" to="5:30 PM">Awards & closing ceremony</ScheduleItem>
                    <ScheduleItem from="5:30 PM" to="6:00 PM">Awards distribution</ScheduleItem>
                    <ScheduleItem from="6:00 PM" to="6:30 PM">Cleanup & doors close</ScheduleItem>
                </ScheduleDay>
            </div>
        </Section>
    )
}

function ScheduleDay(props: {name: string, children: ReactNode}) {
    return (
        <div className="w-96 flex-grow">
            <h3 className="text-2xl font-bold mb-3">{props.name}</h3>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="p-2">Start</th>
                        <th className="p-2">End</th>
                        <th className="p-2">Event</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

function ScheduleItem(props: {from: string, to?: string, bold?: boolean, children: ReactNode}) {
    return (
        <tr className={'border-t' + (props.bold ? ' font-bold' : '')}>
            <td className="p-2">{props.from}</td>
            <td className="p-2">{props.to}</td>
            <td className="p-2">{props.children}</td>
        </tr>
    )
}
