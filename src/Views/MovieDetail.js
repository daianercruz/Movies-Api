import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { MoviesService } from "../api/MoviesService";
import { MovieDetailContainer} from "../styles/MovieDetailContainer";

export const MovieDetail = () => {

    const {id} = useParams();

    const [movie, setMovie] = useState({});
            
        const fetchMovie = async () => {
        const {data} = await MoviesService.getMovieID(id);
        setMovie(data);
        
    }

        useEffect(() => {
            fetchMovie();
        }, []);

        return (

            <MovieDetailContainer>
            <h1>{movie.title}</h1>

<article>
    {movie.overview}
</article>

            </MovieDetailContainer>

        )
}