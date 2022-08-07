
# ICT Skills 2 Assignment.

Name: Nile O'Hagan Student No: 20095361

## Overview.

[ An expansion of the moviesApp from labs ]


+ Similar Movies List - when viewing a movie's details a link to similar movies is available which will bring the user to the list of similar movies to that particular movie selected. Using Parameterized URL.
+ Top Rated Movies List - used current blank option 3 on menu to display top rated movies from a static URL
+ Feature 3
+ etc
+ etc

## Setup requirements.

In order to run this app you must create an account with TMDB and generate your own API key. This should be stored in a .env file within the program folder.

To run the app open a terminal and ensure all dependencies are installed (npm install) then (npm start).

If you wish to use storybook to look at each functioning component (npm run storybook)

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 


+ /movie/:id/similar - lists movies similar to the movie the link is selected in
+ /movie/top_rated - TopRatedMoviesPage lists the movies in the movielist template format
+ /person/popular - lists the most popular actors on the app currently
+ /person/:id - shows details for the indiviual actor selected on a separate page

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.


>Similar Movies Link appears on the Movies Details page. Selecting the link takes user to a Similar Movies List Page where the movies are displayed as in the Discover page format.

![][simLink]

![][simPage]

>Shows a list of the Top Rated Movies on the app

![][topRated]

>Popular Person Page shows a list of the most popular people listed on the website

![][popularPerson]

>By selecting More Info on the popular person's card it is possible o view their biography, some images and some more details on the person

![][specific]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.
The person card feature was developed using storybook
![][personCard]
As was the personList feature.
![][personList]

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

[simLink]: ./public/similarLink.PNG
[simPage]: ./public/similarMoviesPage.PNG
[topRated]: ./public/topRated.png
[popularPerson]: ./public/popularPerson.png
[specific]: ./public/specificPerson.png
[caching]: ./public/caching.png
[personCard]: ./public/personCard.story.png
[personList]: ./public/personList.story.png