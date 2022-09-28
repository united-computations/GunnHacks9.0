import Document, {Html, Head, Main, NextScript} from 'next/document';


class GunnHacksDocument extends Document {
    render() {
        return (
            <Html className="dark">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/png" href="/favicon.png" />

                    <link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
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
