import React from "react";
import PageTemplate from "../components/templatePersonListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getCastAndCrewCredits} from '../api/tmdb-api';
import { useParams } from "react-router-dom";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

function MovieCreditsPage() {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(
        ["castAndCrewCredits", { id: id }],
        getCastAndCrewCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const persons = data.cast;

    return (
        <PageTemplate
            title="Movie Credits"
            persons={persons}
            action={(person) => {
            return <AddToFavouritesIcon person={person}  />
              }}/>
    );
}

export default MovieCreditsPage;