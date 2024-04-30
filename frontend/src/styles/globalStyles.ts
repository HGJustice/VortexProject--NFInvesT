import { createGlobalStyle } from 'styled-components';

import { montserratFont } from './typography';

const GlobalStyle = createGlobalStyle`
    html, body, #__next, main {
        box-sizing: border-box;
        height: 100vh;
        overflow: auto;
        margin: 0;
        padding: 0;
    }

    body {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.colors.background};
        ${montserratFont.style}
    }

    a {
        text-decoration: none;
        display: inline-flex;
        color: unset;
    }

    p {
        hyphens: auto;
    }

    #__next {
        isolation: isolate;
    }
`;

export default GlobalStyle;
