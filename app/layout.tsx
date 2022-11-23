import {ReactNode} from 'react';
import {Abel} from '@next/font/google';

import '../styles/globals.css';


const abel = Abel({
    weight: ['400'],
    subsets: ['latin']
});

export default function Layout(props: {children: ReactNode}) {
    return (
        <html className={"scroll-smooth " + abel.className}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}
