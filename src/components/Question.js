import React from "react";
import {
  Typography,
  Button,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from "@material-ui/core";

export default function Question(props) {
  const { options, question } = props;

  return (
    <Card elevation={5}>
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
              disableElevation
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
