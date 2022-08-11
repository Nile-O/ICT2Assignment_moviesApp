import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovieCredits} from '../api/tmdb-api';
import { useParams } from "react-router-dom";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

function PersonMovieCreditsPage() {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(
        ["movieCredits", { id: id }],
        getMovieCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const movies = data.cast;

    return (
        <PageTemplate
            title="Movie Credits"
            movies={movies} 
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
              }}/>
    );
}

export default PersonMovieCreditsPage;