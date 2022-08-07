import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader/index.js";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import WriteReviewPage from "./pages/addMovieReviewPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import PopularPersonPage from "./pages/popularPersonPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <SiteHeader />     {/* New Header */}
     <MoviesContextProvider>
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}
        />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/reviews/form" element={<WriteReviewPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
        <Route path="/movies/mustwatch" element={<MustWatchMoviesPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/movie/:id/similar" element={<SimilarMoviesPage/>} />
        <Route path="/movie/top_rated" element={<TopRatedMoviesPage/>} />
        <Route path="/person/popular" element={<PopularPersonPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
     <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));