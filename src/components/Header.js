import Head from 'next/head';
import Layout from './LayoutHeader';

export default function Header() {
    return (
      <Layout>
         <Head>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://goran-nasai.com/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="https://goran-nasai.com/favicon.png" />
        <link rel="manifest" href="/manifest.json"></link>
        <meta property="og:type" content="article" />
                <meta property="og:image" content="https://goran-nasai.com/img/ogp_web.jpg" />
                <meta name="twitter:site" content="@goran_nasai" />
                <meta name="twitter:creator" content="@goran_nasai" />
                <meta property="og:site_name" content="GORAN_NASAI" />
                <meta name="twitter:card" content="summary_large_image" />
        <script async custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"></script>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
      </Head>
      <amp-analytics config="https://www.googletagmanager.com/amp.json?id=GTM-MRVTCXW&gtm.url=SOURCE_URL"
        data-credentials="include"></amp-analytics>
      <header amp-fx="float-in-bottom">
        <a href="/" class="btn menu-g pc-hide tab-hide">G</a>
        <ul>
            <li class="btn current">
              <a href="/web/">
                <div class="icon"><amp-img src="/img/web_current.svg"
                    width="50" 
                    height="50"
                    layout="responsive" 
                    alt="web">
           </amp-img></div>
                WEB</a></li>
            <li class="btn">
                <a href="/fashion/">
                <div class="icon"><amp-img src="/img/sneaker.svg"
                    width="50" 
                    height="50"
                    layout="responsive" 
                    alt="fashion">
           </amp-img></div>
           FASHION</a></li>
            <li class="btn">
                <a href="/stories/">
                <div class="icon"><amp-img src="/img/stories.svg"
                    width="50" 
                    height="50"
                    layout="responsive" 
                    alt="stories">
           </amp-img></div>
           STORIES</a></li>
        </ul>
    </header>
      </Layout>
    )
  }