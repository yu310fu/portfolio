import { createGlobalStyle } from "styled-components";
import Palette from "./Palette";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  main { 
    display: block;
  }
  body {
    margin: 56px 0;
    font-family: "Arial", "Hiragino Sans", "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 1.5;
    background: ${Palette.surface.lowest};
    color: ${Palette.content.parimary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${Palette.content.link};
    transition: all .1s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`