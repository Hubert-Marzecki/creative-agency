import {Global, css} from "@emotion/core";
import * as React from "react";

export const GlobalStyles : any = () => {
    // @ts-ignore
    return (
        <>
            <Global styles={css`
  cursor: url("https://www.mytalk1071.com/wp-content/uploads/2016/04/ThinkstockPhotos-491839347.jpg"), auto !important;



html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  font-size:100%;
  font:inherit;
  vertical-align:baseline;
  font-family: Segoe UI;
  cursor: url(https://picsum.photos/id/237/200/300), default;

}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display:block;
}

body {
  line-height:1;
  max-width: 100vw;
  overflow-x: hidden;
}

ul, ol {
  list-style:none;
}

blockquote, q {
  quotes:none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content:'';
  content:none;
}

table {
  border-collapse:collapse;
  border-spacing:0;
}
            `} />
            </>
    )
}