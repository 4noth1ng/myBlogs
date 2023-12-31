import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }

fieldset, c{ border:none; }

img{display: block;}

address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }

ul, ol ,li{ list-style:none; }

body { color:#333; font:12px BASE "SimSun","宋体","Arial Narrow",HELVETICA; background:#fff;}

a { color:#666; text-decoration:none; }

*{box-sizing:border-box}

body,html,#root{
    height: 100%;
    overflow: hidden;
}
`;

export default GlobalStyle;
