import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography, CardActions, CardHeader} from "@mui/material";
import '../App.css';
import Button from "@mui/material/Button";





export default function SpacingGrid() {
  return (
    <div className= "Grid-Container">
      <Grid container flexDirection="row" justifyContent={"flex-start"} spacing={{ xs: 1, md: 2 }}>
        {Array.from(Array(22)).map((_, index) => (
          <Grid item xs={6} sm={4} md={3} flexGrow={1} alignItems={"center"} key={index}>
            <Card sx={{p: 3}}>
              <CardContent>
                <CardHeader title="Top Tier Keeb"/>
                <Typography sx={{ fontSize: 12 }}>This is an item I am totally selling and it is very nice
                </Typography>
                <CardActions>
                  <Button size="medium" fullWidth={true} variant="contained">Add to cart
                  </Button>
                </CardActions>
              </CardContent>

            </Card>
        </Grid>
        
      ))}
      
      </Grid>
    </div>
  );
}
