import React from "react";
import PageTemplate from "../components/templatePersonListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPersons} from '../api/tmdb-api'
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const PopularPersonPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popularPersons', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = persons.filter(p => p.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <PageTemplate
      title="Popular Persons"
      persons={persons}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />  
  );
};

export default PopularPersonPage;