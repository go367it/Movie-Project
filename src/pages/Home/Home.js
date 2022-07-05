import React,{useEffect, useState} from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const config = {
      url: `https://www.omdbapi.com/?s=kung fu panda&apikey=b41184fd`,
      method: "get",
    };
    axios(config)
    .then((res)=>{
      console.log(res.data.Search)
      setMovies(res.data.Search)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-y-16 gap-4 md:px-10">
        {movies.length > 0 ? 
        movies.map(movie=>{
          return(
            <MovieCard key={movie.imdbID} image={movie.Poster} name={movie.Title} />
          )
        })
        :''}
      </div>
    </div>
  );
};

export default Home;
