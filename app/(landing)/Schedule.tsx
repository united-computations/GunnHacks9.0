import {ReactNode} from 'react';
import Section from '../../components/Section';


export default function Schedule() {
    return (
        <Section red title="Tentative Schedule" id="schedule">
            <div className="flex flex-wrap gap-8">
                <ScheduleDay name="January 21">
                    <ScheduleItem start="1:30 PM">Doors open</ScheduleItem>
                    <ScheduleItem start="2:00 PM" end="2:30 PM">Opening ceremony</ScheduleItem>
                    <ScheduleItem start="2:30 PM" end="3:00 PM">Team formation</ScheduleItem>
                    <ScheduleItem start="3:00 PM" bold>Commence Hacking!</ScheduleItem>
                    <ScheduleItem start="3:15 PM" end="4:45 PM">Introduction to Web Development (Unity)</ScheduleItem>
                    <ScheduleItem start="5:00 PM" end="6:30 PM">Python Review & Webscraping</ScheduleItem>
                    <ScheduleItem start="6:30 PM">Dinner</ScheduleItem>
                    <ScheduleItem start="7:00 PM" end="7:30 PM">Coding Trivia Kahoot</ScheduleItem>
                    <ScheduleItem start="7:30 PM" end="8:45 PM">Discord Bots (Python + JS)</ScheduleItem>
                    <ScheduleItem start="8:45 PM" end="10:00 PM">Basic AI/ML</ScheduleItem>
                    <ScheduleItem start="10:00 PM" end="10:30 PM">Cow Drawing Competition</ScheduleItem>
                    <ScheduleItem start="11:00 PM" end="11:30 PM">Chess Tournament</ScheduleItem>
                </ScheduleDay>
                <ScheduleDay name="January 22">
                    <ScheduleItem start="12:00 AM" end="2:00 AM">Movie Night & Snacks</ScheduleItem>
                    <ScheduleItem start="8:00 AM">Breakfast</ScheduleItem>
                    <ScheduleItem start="9:00 AM" end="9:15 AM">Cup Stacking</ScheduleItem>
                    <ScheduleItem start="12:00 PM">Lunch</ScheduleItem>
                    <ScheduleItem start="3:00 PM" bold>Hacking Ends</ScheduleItem>
                    <ScheduleItem start="3:00 PM" end="5:00 PM">Presentations & Demos (Judging)</ScheduleItem>
                    <ScheduleItem start="3:00 PM" end="4:30 PM">Code Golf</ScheduleItem>
                    <ScheduleItem start="3:15 PM" end="4:30 PM">Scientific Computing</ScheduleItem>
                    <ScheduleItem start="5:00 PM" end="5:30 PM">Awards & Closing Ceremony</ScheduleItem>
                    <ScheduleItem start="5:30 PM" end="6:00 PM">Awards Distribution</ScheduleItem>
                    <ScheduleItem start="6:00 PM" end="6:30 PM">Cleanup & Doors Close</ScheduleItem>
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