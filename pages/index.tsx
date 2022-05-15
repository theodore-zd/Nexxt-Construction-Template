import { NextPage } from 'next'
import Head from 'next/head'
import Home from '../page_content/home'

const homePage: NextPage = () => {
  return <div>
    <Head>
      <title>Nexxt Construction - Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="Nexxt Construction Descroption"/>
      {/* Social Embed */}
      <meta property="og:title" content='Nexxt Construction'/>
      <meta property="og:description" content='Nexxt Construction Descroption'/>
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content='/social_image.jpg' /> */}
      <meta property="og:url" content='https://example.com/'/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:site_name" content="Nexxt Construction"/>
    </Head>
    <Home />
  </div>
}

export default homePage
