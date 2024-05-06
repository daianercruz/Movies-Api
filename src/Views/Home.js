import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MovieList } from "../components/MovieList";
import { MovieContainer } from "../styles/MovieContainer";


export const Home = () => {
        const [movies, setMovies] = useState([]);
            
        const fetchMovies = async () => {
        const {data} = await MoviesService.getMovies();
        setMovies(data.results);
    }

        useEffect(() => {
            fetchMovies();
        }, []);

        return(

        <MovieContainer>
           <MovieList movies={movies} />
        </MovieContainer>

)

};
        