import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.values.sm,
    backgroundColor: theme.palette.dark.main,
  },
}));

export default function Result({ result }) {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            You prefer : {result}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
