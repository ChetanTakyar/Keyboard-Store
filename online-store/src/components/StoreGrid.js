import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";

const SpacingGrid = () => {
  return (
    <Grid
      container
      flexDirection="row"
      justifyContent={"flex-start"}
      spacing={{ xs: 1, md: 2 }}
      xs={12}
      sm={10}
      md={8}
      lg={8}
      xl={8}>
      {Array.from(Array(31)).map((_, index) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          key={index}>
          <Card sx={{ p: 2 }}>
            <CardHeader title="Top Tier Keeb" />
            <CardContent>
              <CardMedia
                component="img"
                height="auto"
                image="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SL1500_.jpg"
                alt="Keyboard"
                width="100%"
              />
              <Typography padding="10px 0">
                This is an item I am totally selling and it is very nice
              </Typography>
              <Typography>$50,000</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                fullWidth
                variant="contained">
                Add to cart
              </Button>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SpacingGrid;
