import {ReactNode} from 'react';
import Section from './Section';


export default function Schedule() {
    return (
        <Section red title="Tentative Schedule" id="schedule">
            <div className="flex flex-wrap gap-8">
                <ScheduleDay name="January 21">
                    <ScheduleItem start="1:30 PM">Doors open</ScheduleItem>
                    <ScheduleItem start="2:00 PM" end="2:30 PM">Opening ceremony</ScheduleItem>
                    <ScheduleItem start="2:30 PM" end="3:00 PM">Team formation</ScheduleItem>
                    <ScheduleItem start="3:00 PM" bold>Commence hacking!</ScheduleItem>
                    <ScheduleItem start="3:30 PM" end="5:00 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem start="5:00 PM" end="6:30 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem start="6:30 PM" end="7:30 PM">Dinner</ScheduleItem>
                    <ScheduleItem start="7:00 PM" end="8:30 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem start="8:30 PM" end="10:00 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem start="10:00 PM" end="11:30 PM">[Programming workshop]</ScheduleItem>
                    <ScheduleItem start="11:30 PM" end="1:30 AM">Snacks & movie night</ScheduleItem>
                </ScheduleDay>
                <ScheduleDay name="January 22">
                    <ScheduleItem start="8:00 AM" end="9:00 AM">Breakfast</ScheduleItem>
                    <ScheduleItem start="9:00 AM" end="10:00 AM">[Event]</ScheduleItem>
                    <ScheduleItem start="12:00 PM" end="1:00 PM">Lunch</ScheduleItem>
                    <ScheduleItem start="3:00 PM" bold>Hacking ends</ScheduleItem>
                    <ScheduleItem start="3:00 PM" end="5:00 PM">Presentations & demos (judging)</ScheduleItem>
                    <ScheduleItem start="3:00 PM" end="5:00 PM">[Programming workshops & events]</ScheduleItem>
                    <ScheduleItem start="5:00 PM" end="5:30 PM">Awards & closing ceremony</ScheduleItem>
                    <ScheduleItem start="5:30 PM" end="6:00 PM">Awards distribution</ScheduleItem>
                    <ScheduleItem start="6:00 PM" end="6:30 PM">Cleanup & doors close</ScheduleItem>
                </ScheduleDay>
            </div>
        </Section>
    )
}

function ScheduleDay(props: {name: string, children: ReactNode}) {
    return (
        <div className="w-96 flex-grow">
            <h3 className="text-2xl font-bold mb-3">{props.name}</h3>
            <table className="table-fixed w-full text-left">
                <thead>
                    <tr>
                        <th className="p-2 w-28">Start</th>
                        <th className="p-2 w-28 hidden sm:table-cell">End</th>
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

function ScheduleItem(props: {start: string, end?: string, bold?: boolean, children: ReactNode}) {
    return (
        <tr className={'border-t' + (props.bold ? ' font-bold' : '')}>
            <td className="p-2">{props.start}</td>
            <td className="p-2 hidden sm:table-cell">{props.end}</td>
            <td className="p-2">{props.children}</td>
        </tr>
    )
}
