import Head from 'next/head';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

export default function NewsList({ news }) {
  return (
    <Layout>
      <Head>
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://plusclass-sports-incubation.co.jp/img/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="https://plusclass-sports-incubation.co.jp/img/favicon.png" />
        <title>WEB |GORAN_NASAI|</title>
        <meta name="description" content="宮川貴佳史（@GORAN_NASAI）のウェブサイト。WEBについて書き綴ります。技術とデザイン、パフォーマンスについて。" /> 
        <link rel="canonical" href="https://goran-nasai.com/web/" />
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
      </Head>
      <amp-analytics config="https://www.googletagmanager.com/amp.json?id=GTM-MRVTCXW&gtm.url=SOURCE_URL"
        data-credentials="include"></amp-analytics>
      <div data-amp-auto-lightbox-disable id="wrap">
        <Header></Header>

        <main>
          <div class="bread">
            <ul>
              <li>
                <a href="/">トップ</a>
              </li>
              <li class="current">
                WEB</li>
            </ul>
          </div>

          <section id="news">
          <h1>GORAN_NASAIが<span>WEBについて</span>書き綴ります。</h1>
          <p class="txt">下記のテーマを軸にコンテンツ作っていくつもりです。記事が増えてきたらフレームワーク作ってタグで管理します。</p>


            <div class="container">
            <p class="tit">記事一覧</p>

              <ul class="ar">
                {news.map(news => (
                  <li>
                    <a href={`/web/${news.categ}/${news.id}.html`}>
                        <p class="p1"> {(() => {
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
                        })()}</p>
                        <h2 class="t">{(() => {
                          let st = news.title;
                          let MAX_LENGTH = 35;
                          if (st.length > MAX_LENGTH) {
                            st = st.substr(0, MAX_LENGTH) + '...';
                          }
                          return String(`${st}`);
                        })()}</h2>
                        <p class="d">{(() => {
                          let st = news.description;
                          let MAX_LENGTH = 55;
                          if (st.length > MAX_LENGTH) {
                            st = st.substr(0, MAX_LENGTH) + '...';
                          }
                          return String(`${st}`);
                        })()}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </section>

        </main>

        <footer>
      <a href="/index.html">トップへ戻る</a>
    </footer>

      </div>

    </Layout>
  );
}


export const config = {
  amp: true,
};

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://goran-nasai.microcms.io/api/v1/web?limit=20', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      news: data.contents,
    },
  };
};