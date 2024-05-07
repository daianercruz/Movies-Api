import { MovieItem } from "./MovieItem";

export const MovieList = ({movies}) => (
    <section> 
        <ul>

            {movies.map(m => <MovieItem key={m.title} id={m.id} title={m.title} />)}

        </ul>
    </section>
);