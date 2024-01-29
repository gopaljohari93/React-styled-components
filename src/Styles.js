import React from 'react';
// import styled from 'styled-components';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';


const Styles = () => {

    const theme = {
        color: {
            textColor: "red",
            bg: "radial-gradient( 100% 100% at 100% 0, #5adaff 0, #5468ff 100%);",
        },
        responsive: {
            mobile: "768px",
            tab: "998",
        },
    };

    const Button = styled.button`
        background-color: yellow;
        padding: 10px 16px;
        color: blue;

        &:focus{
            border: 5px solid yellow;
        }
        &:hover{
            background: orange;
        }
        &:active{
            background: blue;
        }

        @media (max-width: ${({ theme }) => theme.responsive.mobile}){
            
        }
    `;

    const P = styled.p`
    background-color: yellow;
    padding: 10px 16px;
    color: blue;
    background-image: ${({ theme }) => theme.color.bg};
    `;

    const H1 = styled.h1`
        background-color: yellow;
        padding: 10px 16px;
        // color: blue;
    `;


    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Button>Click</Button>
                <P bg="pink">this is a paragraph</P>
                <H1>Heading</H1>
            </>
        </ThemeProvider>
    )
}

export default Styles;