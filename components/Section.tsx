import {ReactNode} from 'react';


type SectionProps = {title?: string, red?: boolean, id?: string, children: ReactNode};
export default function Section(props: SectionProps) {
    const {title, red, id, children} = props;

    return (
        <section id={id} className={"font-['Abel'] text-center " + (red ? 'text-white bg-theme' : 'bg-white')}>
            <div className="container py-8">
                {title && (
                    <h2 className="text-center text-3xl font-bold border-b-2 border-current mb-4">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    )
}
