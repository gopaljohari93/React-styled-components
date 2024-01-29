import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    height: 100vh;
    display: grid;
    place-items: center;
    background-image: ${({ theme }) => theme.color.bg}
}
`;