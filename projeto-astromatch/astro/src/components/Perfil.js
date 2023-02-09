import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import img from "./imagens/x.png";
import img1 from "./imagens/heart.png"


const ImagemPerfil = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  @media  (max-width: 800px) {
    width: 250px;
    height: 250px;
    
  }
`;
const BotaoLike = styled.button`
border: none;
inherits: inherit;
background-color: #FFFFFF;
img{width:100px; 
  :hover{
  width: 110px;
}
}
`;
const BotaoDislike = styled.button`
border: none;
inherits: inherit;
background-color: #FFFFFF;
img{width:100px; 
  :hover{
  width: 110px;
}
}

`;


function Perfil() {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    getProfiletoChoose();
  }, []);

  const getProfiletoChoose = function () {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guitocci/person`
      )
      .then((response) => {
        setPerfil(response.data.profile);
        console.log(response.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const choosePerson = function (id) {
    const body = {
      id: id,
      choice: true,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guitocci/choose-person`,
        body
      )
      .then((response) => {
        console.log(response.data.isMatch);
        if (response.data.isMatch) {
          alert("É um match !");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Perfil</h2>
      <ImagemPerfil src={perfil.photo} alt={perfil.photo_alt} />
      <h2>
        {perfil.name},{perfil.age}
      </h2>
      <p>{perfil.bio}</p>
      
      <BotaoLike
        onClick={() => {
          choosePerson(perfil.id);
          getProfiletoChoose();
        }}
      >
        <img src={img1} alt = "img like"></img>
       
      </BotaoLike>
      
      <BotaoDislike onClick={getProfiletoChoose}><img src={img} alt="img dislike"/></BotaoDislike>
    </div>
  );
}

export default Perfil;
