import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarMovies} from '../api/tmdb-api';
import { useParams } from "react-router-dom";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

function SimilarMoviesPage() {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(
        ["similar", { id: id }],
        getSimilarMovies
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.results;

    return (
        <PageTemplate
            title="Similar Movies"
            movies={movies} 
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
              }}/>
    );
}

export default SimilarMoviesPage;