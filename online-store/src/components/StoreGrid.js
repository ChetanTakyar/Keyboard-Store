import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
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

export default function SpacingGrid() {
  return (
    <Box>
      <Grid
        container
        flexDirection="row"
        justifyContent={"flex-start"}
        spacing={{ xs: 1, md: 2 }}
        xs={8}>
        {Array.from(Array(31)).map((_, index) => (
          <Grid
            item
            xs={3}
            key={index}>
            <Card sx={{ p: 2 }}>
              <CardHeader title="Top Tier Keeb" />
              <CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SL1500_.jpg"
                  alt="Keyboard"
                />
                <Typography padding="10px 0">
                  This is an item I am totally selling and it is very nice
                </Typography>
                <Typography>$50,000</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Button
                  size="medium"
                  fullWidth
                  variant="contained">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
