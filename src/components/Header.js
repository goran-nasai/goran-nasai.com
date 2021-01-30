export default function Header() {
    return (
      <>
    <header id="header">
      <div class="logo">
        <a href="/index.html">
          <amp-img src="/img/logo_header_w.svg" width="395" height="54" layout="responsive"
            alt="plusclass sports incubation logo"></amp-img>
        </a>
      </div>
      <div class="menu-btn pc-hide tab-hide"
        data-amp-bind-class="visible ? 'menu-btn pc-hide tab-hide sp-hide' : 'menu-btn pc-hide tab-hide' " role="button" tabindex="0"
        on="tap:AMP.setState({visible: !visible})">≡</div>
      <div class="menu-btn pc-hide tab-hide sp-hide"
        data-amp-bind-class="visible ? 'menu-btn pc-hide tab-hide' : 'menu-btn pc-hide tab-hide sp-hide' " role="button" tabindex="0"
        on="tap:AMP.setState({visible: !visible})">×</div>
      <nav class="sp-hide" data-amp-bind-class="visible ? '' : 'sp-hide' ">
        <ul>
          <li><a class="da">サービス</a></li>
          <li><a class="da">事例紹介</a></li>
          <li class="current"><a>ニュースリリース</a></li>
          <li><a href="https://plus-class.co.jp/profile/">会社情報</a></li>
          <li><a href="/contact/">お問い合わせ</a></li>
        </ul>
        <div class="bg-w"></div>
      </nav>
    </header>
      </>
    )
  }