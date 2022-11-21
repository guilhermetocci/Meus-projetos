import styled from "styled-components";


export const Container = styled.div`
justify-content: center;
text-align: center;

`
export const Container2 = styled.div`
margin: 6%;

`

export const Title = styled.h1`
font-size: 5vh;
color: white;

`
export const PurpleBackground = styled.div`
background-color:#2D0C5E;
display: flex;
flex-direction: column;
margin-bottom: 5%;
padding-bottom: 8%;
padding-top: 5%;


`
export const FiltrePor = styled.p`
color: white;
font-size: 3vh;
margin-top: 2%;

`

export const MovieList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(30vh,1fr));
column-gap: 3rem;
row-gap: 4rem;

`

export const Movie = styled.li`
display: flex;
flex-direction: column;
align-items: center;

`
export const Img = styled.img`
width: 28vh;
border-radius: 1rem;
margin-bottom: 2rem;

`
export const Span = styled.span`
font-weight: bold;
text-align: center;
display: flex;
text-decoration: none;
color: black;
font-size: large;
`
export const ReleaseDate = styled.p`
font-size: medium;
color: gray ;
font-weight: bold;
display: flex;
text-align: center;
margin-top: 1rem;

`

export const A = styled.a`
:hover{
    transform: scale(1.1);
}
transition: all 0.3s;
text-decoration: none;
`

export const Button = styled.button`
font-weight: bold;
border: none;
background: none;
color: #5C16C5;
margin-left: 5%;
margin-right: 5%;
margin-bottom: 5%;
:hover{
    transform: scale(1.2);
}
transition: all 0.3s;
text-decoration: none;


`

export const ButtonContainer = styled.div`
margin-top: 5%;
`

