import * as React from "react";
import Grid from "@mui/material/Grid";
import {Card, CardContent, Typography, CardActions, CardHeader, CardMedia} from "@mui/material";
import '../App.css';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';






export default function SpacingGrid() {
  return (
    <div className= "Grid-Container">
      <Grid container flexDirection="row" justifyContent={"flex-start"} spacing={{ xs: 1, md: 2 }}>
        {Array.from(Array(31)).map((_, index) => (
          <Grid item xs={6} sm={4} md={4} flexGrow={1} alignItems={"center"} key={index}>
            <Card sx={{p: 3}}>
            <CardHeader title="Top Tier Keeb"/>
              <CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image="https://m.media-amazon.com/images/I/61GnUc9e7VL._AC_SL1500_.jpg"
                  alt="Keyboard"
                />
                <Typography sx={{ fontSize: 12 }}>
                  This is an item I am totally selling and it is very nice
                </Typography>
              </CardContent>

              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                
                <Button size="medium" fullWidth variant="contained">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        
        ))
      }
      
      </Grid>
    </div>
  );
}
