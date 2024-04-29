import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { MovieContainer } from "./styles/MovieContainer";
import { MoviesService } from "./api/MoviesService";

function App() {
  
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
  const {data} = await MoviesService.getMovies();
  setMovies(data.results);
  

}
useEffect(() => {
  fetchMovies();
}, [])

  return (
    <div className="App">
      
      <Header />

   <MovieContainer>
      <MovieList movies={movies} />
      </MovieContainer>

</div>
  );
}

export default App;
