import React from "react";
import {
  Typography,
  CardContent,
  CardActionArea,
  Card,
  Grid,
} from "@material-ui/core";

export default function Products(props) {
  const { key, details } = props;

  return (
    <Grid xs={12} sm={4} md={4} key={key} item>
      <Card elevation={5}>
        <CardActionArea>
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h4" component="h2">
              {details.name}
            </Typography>
            <Typography color="textSecondary">{details.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
