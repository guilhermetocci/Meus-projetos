import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../../config/key";
import {
  Container,
  Container2,
  Date,
  Img,
  P,
  PurpleBackground,
  Sinopse,
  Title,
} from "./styles";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
 
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const detail = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date,
        };
        console.log(detail);
        setMovie(detail);
      });
  }, [id]);


return (
  <div>
    <PurpleBackground>
      
      <Container>
        <Img src={movie.image} alt={movie.sinopse}></Img>
        <Container2>
          <Title>{movie.title}</Title>
          <Date>{movie.releaseDate}</Date>
          <P>Sinopse</P>
          <Sinopse>{movie.sinopse}</Sinopse>
        </Container2>
      </Container>
    
    </PurpleBackground>
 
    </div>

);
}

export default Details;

