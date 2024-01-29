import React from 'react';
import Styles from './Styles';
import styled from 'styled-components';
import './App.css';

const App = () => {

    const Button = styled.button`
    background-color: #04AA6D
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    `;

    const P = styled.p`
    background-color: lightblue;
    border-style: dotted;
    padding: 10px 10px 15px 10px;
    color: red;
    font-size: 2rem;
    `;

    const H2 = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color: #4CAF50;
    `;

    const Wrapper = styled.section`
    .btn{
        background-color:DodgerBlue;
        padding: 16px;
        color: #fff;
    }
    p{
        background-color:red;
        padding: 16px;
        color: #fff;
    }
    h2{
        background-color:yellow;
        padding: 16px;
        color: #fff;
    }
    `;


    // Variables Style component
    let myFavColor = "white";

    // Nesting  Style component
    const Buttons = styled.button`
 background-color: #04AA6D;;

 background-color: ${(props) => props.bg};

background-color: ${({ bg }) => bg};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

    &:focus{
        width: 300px;
        height: 100px;
        padding: 15px;
        background-color: coral;
        box-shadow: 10px 10px;
    }

    &:hover{
        border: 10px solid red;
    }

    &:active{
        width: 300px;
        height: 100px;
        padding: 15px;
        background-color: yellow;
        box-shadow: 10px 10px;
    }

    &:after{
        content: " →";
    }

    span{
        color: tomato;

        b{
            color: white;
        }
        &:hover{
            color: orange;
        }
    }
   `;

    const Para = styled.p`
   background-color: lightblue;
    border-style: dotted;
    padding: 10px;
    color: ${myFavColor};
   `

    return (
        <>
            <Styles />
            <Button>Click</Button>
            <P>First style method Styled components</P>
            <H2>Heading</H2> 

            <hr /> 

            <Wrapper>
                <button className='btn'>Click</button>
                <p>Second style method Styled components</p>
                <h2>Heading</h2>
            </Wrapper> 

           <hr /> 

           <Button className='btn'>
                Style Click
                <span> Like and Share <b>Comment</b></span>
            </Button>
            <Para>Paragraph style</Para> 


            {/* How to pass PROPS in Styled Components */}
           <Button className='btn' bg="orange">
                Style Click
            </Button>
            <Para>Paragraph style</Para>
        </>
    )
}

export default App;