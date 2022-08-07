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

  return (
    <PageTemplate
      title="Popular Persons"
      persons={persons}
      action={(person) => {
        return <AddToFavouritesIcon person={person} />
      }}
    />  
  );
};

export default PopularPersonPage;