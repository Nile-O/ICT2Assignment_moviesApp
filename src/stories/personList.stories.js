import React from "react";
import PersonList from "../components/personList";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
//import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Home Page/PersonList",
  component: PersonList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const persons = [
    { ...SamplePerson, id: 1 },
    { ...SamplePerson, id: 2 },
    { ...SamplePerson, id: 3 },
    { ...SamplePerson, id: 4 },
    { ...SamplePerson, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <PersonList
        persons={persons}
        action={(person) => <AddToFavoritesIcon person={person} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
