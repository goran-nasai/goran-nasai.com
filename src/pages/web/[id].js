import Head from 'next/head'
import Layout from '../../components/Layout'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function NewsId({ news }) {
    return (
        <Layout>
            <Head>
                <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
                <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
                <link rel="icon" href="https://plusclass-sports-incubation.co.jp/img/favicon.png" />
                <link rel="apple-touch-icon-precomposed" href="https://plusclass-sports-incubation.co.jp/img/favicon.png" />
                <title>{news.title}</title>
                <link rel="canonical" href={'https://plusclass-sports-incubation.co.jp/news/'+ news.id +'.html'} />
                <meta name="description" content={news.description} />
                <meta property="og:title" content={news.title} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content={news.ogp.url} />
                <meta property="og:site_name" content="プラスクラス・スポーツ・インキュベーション" />
                <meta property="og:description" content={news.description} />
                <meta name="twitter:card" content="summary_large_image" />
                <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
                <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
            </Head>
            <amp-analytics config="https://www.googletagmanager.com/amp.json?id=GTM-MRVTCXW&gtm.url=SOURCE_URL"
                data-credentials="include"></amp-analytics>
            <div data-amp-auto-lightbox-disable id="wrap">

                <Header></Header>
                <main>
                    <div class="bread">
                        <ul>
                            <li>
                                <a href="/">ホーム ></a>
                            </li>
                            <li>
                                <a href="/news/">ニュース一覧 ></a>
                            </li>
                            <li class="current">
                                {news.title}
                            </li>
                        </ul>
                    </div>
                    <article>
                        <h1 class="tit">{news.title}</h1>
                        <p class="time"><time>
                            {( () => {
                                  let d4 = new Date(news.publishDate)
                                  d4.setHours(d4.getHours() + 9)
                                  let year = d4.getFullYear()
                                  let month = ("0" + (d4.getMonth() + 1)).slice(-2)
                                  let date = ("0" + d4.getDate()).slice(-2)
                                  let dayNum = d4.getDay()
                                  let day = null
                                  if (dayNum == 0) day = 'SUN'
                                  if (dayNum == 1) day = 'MON'
                                  if (dayNum == 2) day = 'TUE'
                                  if (dayNum == 3) day = 'WED'
                                  if (dayNum == 4) day = 'THU'
                                  if (dayNum == 5) day = 'FRI'
                                  if (dayNum == 6) day = 'SAT'
                                  let hour = ("0" + d4.getHours()).slice(-2)
                                  let minute = ("0" + d4.getMinutes()).slice(-2)
                                  let second = ("0" + d4.getSeconds()).slice(-2)
                                  return String(`${year}.${month}.${date} ${day}`)
                            } ) ()}
                            </time> </p>

                        <div class="share">
                            <p class="sp-hide">SHARE</p>
                            <amp-social-share width="30" height="30" type="facebook" data-param-app_id="763054901100963">
                            </amp-social-share>
                            <amp-social-share width="30" height="30" type="twitter"></amp-social-share>
                            <amp-social-share width="30" height="30" type="line"></amp-social-share>
                        </div>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${news.main.replace(/<img([^>]*)>/gi,
                                    (_match, sub) => {
                                        sub = sub.replace(
                                            /src="(.+)(\?)(.+)" /,
                                            'src="$1" '
                                        ).replace(
                                            /src="(.+)" /,
                                            'src="$1?w=620&h=410&fit=fill&fill-color=ffffff"'
                                        )
                                        return `<amp-img ${sub} layout="responsive" width="620" height="410"></amp-img>`
                                    }).replace(/<iframe/gi,'<div class="img"><amp-iframe sandbox="allow-scripts allow-same-origin" layout="responsive"').replace(/\/iframe>/gi,'/amp-iframe></div>')}`,
                            }}
                        />

                        <div class="line"></div>

                        <div class="share bottom">
                            <p>SHARE</p>
                            <amp-social-share width="30" height="30" type="facebook" data-param-app_id="763054901100963">
                            </amp-social-share>
                            <amp-social-share width="30" height="30" type="twitter"></amp-social-share>
                            <amp-social-share width="30" height="30" type="line"></amp-social-share>
                        </div>

                    </article>

                    <Contact></Contact>

                </main>

                <Footer></Footer>
            </div>
        </Layout>
    );
}
export const config = {
    amp: true,
};

export const getStaticPaths = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    };
    const data = await fetch('https://goran-nasai.microcms.io/api/v1/web?limit=20', key)
        .then(res => res.json())
        .catch(() => null);
    const paths = data.contents.map(content => `/web/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps = async context => {
    const id = context.params.id;
    const key = {
        method: 'GET',
        headers: { 'X-API-KEY': process.env.API_KEY },
    };
    const data = await fetch(
        'https://goran-nasai.microcms.io/api/v1/web/' + id,
        key,
    )
        .then(res => res.json())
        .catch(() => null);
    return {
        props: {
            news: data,
        },
    };
};