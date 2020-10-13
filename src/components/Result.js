import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@material-ui/core";

export default function Result({ result }) {
  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardContent>
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h4"
            component="h2"
          >
            You prefer : {result}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
