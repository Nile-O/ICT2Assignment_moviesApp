import React from "react";
import PersonCard from "../components/personCard";
import SamplePerson from "./samplePersonData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
// import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Home Page/PersonCard",
  component: PersonCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <PersonCard
      person={SamplePerson}
      action={(person) => <AddToFavoritesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, profile_path: undefined };
  return (
    <PersonCard
      person={sampleNoPoster}
      action={(person) => <AddToFavoritesIcon person={person} />}
      taging={(person) => null}
    />
  );
};
Exceptional.storyName = "exception";
