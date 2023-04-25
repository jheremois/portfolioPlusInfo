import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PortfolioPlus - Your Professional Portfolio Made Easy. Create, share, and showcase your work online with our user-friendly platform. Get valuable feedback and ratings on your services. Perfect for freelancers, business owners, job seekers, students, and anyone looking to showcase their work online professionally. Start building your portfolio today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="#111315"/>
        <link rel="icon" href="/logo.png" />
        <title>PortfolioPlus</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
