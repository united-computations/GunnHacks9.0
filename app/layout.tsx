import {ReactNode} from 'react';

import '../styles/globals.css';


export default function Layout(props: {children: ReactNode}) {
    return (
        <html className="scroll-smooth">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/png" href="/favicon.png" />

                <link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}
