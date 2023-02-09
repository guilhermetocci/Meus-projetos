import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;



@media (max-width: 800px) {
  flex-wrap: wrap;
}
`
export const Container2 = styled.div`
margin-left: 2%;
display: flex;
flex-direction: column;

`
export const Img = styled.img`
width: 40vh;
margin-left: 2%;
border-radius: 1rem;
@media (max-width: 800px){
    margin-top: 2rem;
   
}
`
export const PurpleBackground = styled.div`
background-color:#2D0C5E;
display: flex;
flex-direction: column;
margin-bottom: 5%;
padding-bottom: 4%;
padding-top: 5%;



`
export const Title = styled.h1`
color: white;
margin-bottom: 2% ;

@media (max-width: 800px){
    margin-top: 3rem;
    margin-left: 1rem;
}
`
export const Sinopse = styled.p`
color: white;
max-width: 60%;
@media (max-width: 800px) {
  max-width: 95%;
  margin-left:1rem;
  margin-right:1rem;
  
  
}
`
export const Date = styled.p`
color: white;
margin-bottom: 2% ;
@media (max-width: 800px) {
  max-width: 95%;
  margin-left:1rem;
  margin-right:1rem;
  margin-bottom: 3rem;
 
}
`
export const P = styled.h2`
color: white;
margin-bottom: 1rem;
@media (max-width:800px){
    margin-left:1rem;
}
`
