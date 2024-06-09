import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const SkeletonBookCard = () => (
  <Card className="m-4">
    <CardContent>
      <Typography variant="h5" component="div">
        Loading...
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please wait
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" disabled>
        Add to Bookshelf
      </Button>
    </CardActions>
  </Card>
);

export default SkeletonBookCard;
