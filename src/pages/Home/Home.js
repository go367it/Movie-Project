import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Image1 from "../../images/image1.jpg";

const Home = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:px-10">
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
        <MovieCard 
          image={Image1} 
          name={"Obi-Wan Kenobi"} />
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
        <MovieCard
          image={Image1}
          name={"Doctor Strange in the Multiverse of Madness"}
        />
      </div>
    </div>
  );
};

export default Home;
