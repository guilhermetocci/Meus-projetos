import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import img from "./imagens/lixeira.png";

const ImagemMatch = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  
  @media  (max-width: 800px) {
    width: 250px;
    height: 250px;
    
  }
`;
const ClearMatchesButton = styled.button`
margin: 30px;
img{width: 60px; 
  :hover{
    width: 70px;
  }
};
background-color: #FFFFFF;
border: none;
@media (max-width: 800px) {
  margin: 0;
}
`

function Matchs() {
  const [match, setMatch] = useState([]);
  const [clear, setClear] = useState(1);

  useEffect(() => {
    getMatches();
  }, [clear]);

  const getMatches = function () {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guitocci/matches"
      )
      .then((response) => {
        setMatch(response.data.matches);
      })
      .catch((error) => {
        setMatch(error.message);
      });
  };
  const clearMatches = function () {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guitocci/clear"
      )
      .then((response) => {
        setClear(clear + 1);
        console.log(response.data.message);
        alert("Seus matches foram resetados");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Matches</h2>
      <ClearMatchesButton
        onClick={() => {
          clearMatches();
        }}
      ><img src={img} alt="lixeira img"></img>
        
      </ClearMatchesButton>
      {match.map((match) => {
        return (
          <div>
            <ImagemMatch src={match.photo} alt={match.photo_alt}/>
            <h2>
              {match.name},{match.age}
            </h2>
            <p>{match.bio}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Matchs;
