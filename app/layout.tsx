import type {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Abel} from 'next/font/google';

import '../styles/globals.css';


const abel = Abel({
    weight: ['400'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    description: 'Make, Build, Create & Learn. It’s GunnHacks 9.0, Gunn’s 24‑hour high school hackathon.'
}

export default function Layout(props: {children: ReactNode}) {
    return (
        <html lang="en" className={"scroll-smooth " + abel.className}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </head>
            <body className="after:fixed after:inset-x-0 after:top-0 after:h-screen after:bg-[url('/bg.svg')] after:bg-cover after:bg-center after:-z-10">
                {props.children}
            </body>
        </html>
    )
}
