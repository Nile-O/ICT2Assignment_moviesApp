import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import WorkIcon from "@material-ui/icons/Work";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
//import Avatar from "@material-ui/core/Avatar";
//import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function PersonCard({ person, action }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
     <CardHeader
      className={classes.header}
            title={
        <Typography variant="h5" component="p">
          {person.name}{" "}
        </Typography>
      }
    /> 
      <CardMedia
        className={classes.media}
        image={
          person.profile_path
            ? `https://www.themoviedb.org/t/p/w235_and_h235_face${person.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <WorkIcon fontSize="small" />
              {person.known_for_department}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {person.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(person)}
        <Link to={``}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}