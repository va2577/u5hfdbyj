<template>
  <header>
    <ul>
      <li>
        <nuxt-link to="/">
          <img src="~/static/img/identicon.png" alt="icon">
          <span class="icon3">Site Title</span>
        </nuxt-link>
      </li>
      <li class="nav-li">
        <nuxt-link to="/blog/">
          <svg class="octicon octicon-note" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z"></path></svg>
          <span>BLOG</span>
        </nuxt-link>
      </li>
      <li class="nav-li">
        <nuxt-link to="/about/">
          <svg class="octicon octicon-person" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path></svg>
          <span>ABOUT</span>
        </nuxt-link>
      </li>
      <li class="nav-li">
        <nuxt-link to="/privacy/">
          <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg>
          <span>PRIVACY</span>
        </nuxt-link>
      </li>
    </ul>
    <div class="absolute">
      <nav>
        <nuxt-link to="/">
          <svg class="octicon octicon-home" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"></path></svg>
          <!-- HOME -->
        </nuxt-link>
        <nuxt-link to="/blog/">
          <svg class="octicon octicon-note" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z"></path></svg>
          <!-- BLOG -->
        </nuxt-link>
        <nuxt-link to="/about/">
          <svg class="octicon octicon-person" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path></svg>
          <!-- ABOUT -->
        </nuxt-link>
        <nuxt-link to="/privacy/">
          <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"></path></svg>
          <!-- PRIVACY -->
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    align-items: center;
    border-bottom: #e2e8f0 solid 1px;
    display: flex;
    height: 92px;
    margin: 0px auto;
    width: 992px;
  }
  header ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
  header li:first-child a {
    align-items: center;
    display: flex;
  }
  header li:first-child span {
    align-items: center;
    color: #2f495e;
    font-size: 24px;
    margin-left: 6px;
  }
  header a {
    color: #2f495e;
  }
  header a {
    color: #2f495e;
  }
  header img {
    display: inline-block;
    height: 40px;
    width: 40px;
  }
  .absolute {
    display: none;
    position: absolute;
  }
  .absolute nav {
    background-color: #fff;
    border-top: #e2e8f0 solid 1px;
    bottom: 0;
    display: flex;
    height: 60px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .absolute nav a {
    color: #2f495e;
    padding-bottom: 0;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-top: .75rem;
    text-align: center;
  }
  .octicon {
    display: inline-block;
    fill: #2f495e;
    height: 32px;
    line-height: 56px;
    vertical-align: middle;
    width: 32px;
  }
  @media screen and (max-width: 992px) {
    header {
      padding-left: 1%;
      padding-right: 1%;
      width: 98%;
    }
    header .nav-li {
      display: none;
    }
    .absolute {
      display: block;
    }
  }
</style>
