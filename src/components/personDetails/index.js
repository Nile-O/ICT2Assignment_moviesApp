import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Cake from '@material-ui/icons/Cake';
import Place from '@material-ui/icons/Place';

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const PersonDetails = ( {person}) => {
  const classes = useStyles();
  return (
    <>
          <Typography variant="h5" component="h3">
              Biography
          </Typography>

          <Typography variant="h6" component="p">
              {person.biography}
          </Typography>
          <Paper component="ul" className={classes.chipSet}>
              <Chip icon={<Cake />} label={`${person.birthday}`} />
              <Chip
                  icon={<Place />}
                  label={`${person.place_of_birth}`} />
              <Chip
                  icon={<StarRate />}
                  label={`${person.popularity}`} />
          </Paper>
      </>
  );
};
export default  PersonDetails ;