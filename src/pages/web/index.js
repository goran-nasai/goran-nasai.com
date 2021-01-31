import Head from 'next/head';
import Layout from '../../components/LayoutList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NewsList({ news }) {
  return (
    <Layout>
      <Head>
        <title>WEB | GORAN_NASAI</title>
        <meta name="description" content="宮川貴佳史（@GORAN_NASAI）のウェブサイト。WEBについて書き綴ります。技術とデザイン、パフォーマンスについて。" />
        <meta property="og:title" content="WEB | GORAN_NASAI" />
        <meta property="og:description" content="宮川貴佳史（@GORAN_NASAI）のウェブサイト。WEBについて書き綴ります。技術とデザイン、パフォーマンスについて。" />
        <link rel="canonical" href="https://goran-nasai.com/web/" />
      </Head>

      <div data-amp-auto-lightbox-disable id="wrap">
        <Header></Header>

        <main>
          <ul class="bread">
            <li>
              <a href="/">トップ</a>
            </li>
            <svg class="breadicon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
            <li class="current">
              WEB</li>
          </ul>

          <h1>GORAN_NASAIが<span>WEBについて</span>書き綴ります。</h1>
          <p class="txt">下記のテーマを軸にコンテンツ作っていくつもりです。記事が増えてきたらフレームワーク作ってタグで管理します。</p>


          <div class="container">
            <p class="tit">記事一覧</p>

            <ul class="ar">
              <li>
                <a href="/web/js/dom-scripting/">
                  <p class="date">2020.10.07 WED</p>
                  <h2 class="t">DOMスクリプティングの本質的な遅さについて</h2>
                  <p class="d">DOM生成まわりのロジックからパフォーマンス考察</p>
                </a>
              </li>
              <li>
                <a href="/web/st-data/gtm-js/">
                  <p class="date">2020.06.18 THU</p>
                  <h2 class="t">Google タグ マネージャーを使用して動的に JSON-LD...</h2>
                  <p class="d">Google タグ マネージャーで構造化データを生成する手順</p>
                </a>
              </li>
              <li>
                <a href="/web/performance/web-vitals/">
                  <p class="date">2020.05.06 WED</p>
                  <h2 class="t">Web Vitalsについて</h2>
                  <p class="d">ウェブパフォーマンスのコアバリューとして導入されるWeb Vitalsについて、その概要と計測手法</p>
                </a>
              </li>
            </ul>
          </div>

          <p class="tit">テーマ一覧</p>
          <ul class="theme">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>AMP</li>
            <li>Webパフォーマンス</li>
            <li>SEO</li>
          </ul>

        </main>

        <Footer></Footer>

      </div>

    </Layout>
  );
}


export const config = {
  amp: true,
};