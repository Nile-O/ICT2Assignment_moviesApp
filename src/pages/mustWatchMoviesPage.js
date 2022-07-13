import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";


function MustWatchMoviesPage() {
    const { mustWatch: movieIds } = useContext(MoviesContext);

    // Create an array of queries and run in parallel.
    const mustWatchMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", { id: movieId }],
                queryFn: getUpcomingMovies,
            };
        })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const movies = mustWatchMovieQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map((g) => g.id);
        return q.data;
    });

    return (
        <PageTemplate
            title="Must Watch Movies"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <RemoveFromFavourites movie={movie} />
                        <WriteReview movie={movie} />
                    </>
                );
            } } />
    );
}

export default MustWatchMoviesPage;