
# ICT Skills 2 Assignment.

Name: Nile O'Hagan Student No: 20095361

## Overview.

[ An expansion of the moviesApp from labs ]

e.g. 
+ Similar Movies List - when viewing a movie's details a link to similar movies is available which will bring the user to the list of similar movies to that particular movie selected.
+ Feature 2
+ Feature 3
+ etc
+ etc

## Setup requirements.

[ Briefly state (to a third party) the setup steps necessary to run your app/client locally, e.g. .env and any other config files.]

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ 
+ 
+ /movie/:id/similar - lists movies similar to the movie the link is selected in
+ etc.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.


>Similar Movies Link appears on the Movies Details page. Selecting the link takes user to a Similar Movies List Page where the movies are displayed as in the Discover page format.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/similarLink.PNG
[d2]: ./public/similarMoviesPage.PNG
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png