import Document, {Html, Head, Main, NextScript} from 'next/document';


class GunnHacksDocument extends Document {
    render() {
        return (
            <Html className="scroll-smooth font-['Abel']">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/png" href="/pixel-lambda.png" />

                    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default GunnHacksDocument;
