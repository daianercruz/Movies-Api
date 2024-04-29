import { MovieItem } from "./MovieItem";

export const MovieList = ({movies}) => (
    <section> 
        <ul>

            {movies.map(m => <MovieItem key={m.title} title={m.title} />)}

        </ul>
    </section>
);