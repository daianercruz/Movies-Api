import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { MovieContainer } from "./styles/MovieContainer";

function App() {
  return (
    <div className="App">
      
      <Header />

   <MovieContainer>
      <MovieList movies={[]} />
      </MovieContainer>

</div>
  );
}

export default App;
