import React, { Component } from "react";
import {
  Container,
  Title,
  PurpleBackground,
  FiltrePor,
  Img,
  MovieList,
  Movie,
  Span,
  A,
  ReleaseDate,
  ButtonContainer,
  Button,
  Container2,
  Generos,
  Tags,
} from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { APIKey } from "../../config/key";
import { Link } from "react-router-dom";


function Home() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";
  const [count, setCount] = useState(1);
 
  useEffect(() => {
    getPopularMovies();
   

  }, [count]);


  const getPopularMovies = function () {
 
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=${count}`
      )

      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        setMovies(error.message);
      });
  };

  function NextPage(){
     setCount(count + 1)
    
    
  }
 
  function PreviousPage(){
    if(count > 1){
      setCount(count - 1)
    }
  
  }
 
  console.log(count)
  return (
  
    <Container>
      <PurpleBackground>
        <Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Title>
    
    
      </PurpleBackground>
      <Container2>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <A href={`details/${movie.id}`}>
                <Img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                ></Img>

                <Span>{movie.title}</Span>
                <ReleaseDate>{movie.release_date}</ReleaseDate>
              </A>
            </Movie>
          );
        })}
      </MovieList>
      </Container2>
      <ButtonContainer>
      <Button onClick={() => PreviousPage()}>Anterior</Button>
      <Button onClick={() => NextPage()}>Próxima</Button>
      </ButtonContainer>

    </Container>
   
  );
}

export default Home;
