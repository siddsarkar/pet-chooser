import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.values.sm,
    backgroundColor: theme.palette.dark.main,
  },
}));

export default function Question(props) {
  const { options, question } = props;
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardContent style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h4" component="h2">
            {question}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {options.map((item, i) => {
          return (
            <Button
              onClick={() => props.onSelect(item.type)}
              key={i}
              color="default"
              variant="contained"
            >
              {item.content}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
}
