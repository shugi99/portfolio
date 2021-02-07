import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content='My Portfolio Website' />

          <script src='https://kit.fontawesome.com/a076d05399.js'></script>
          <link
            rel='stylesheet'
            href='https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/all.min.css'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
