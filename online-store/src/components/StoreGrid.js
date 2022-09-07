import * as React from "react";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Typography } from "@mui/material";
import '../App.css';


export default function SpacingGrid() {
  return (
    <div className= "Grid-Container">
    
      <Grid container flexDirection="row" justifyContent={"flex-start"} spacing={{ xs: 2, md: 3 }}>
      {Array.from(Array(22)).map((_, index) => (
        <Grid item xs={6} sm={4} md={3} flexGrow={1} alignItems={"center"} key={index}> 
            <Card
              sx={{p: 3,}}>
              <CardContent>
                
              <Typography>This is an item I am totally selling</Typography>
              </CardContent>
            </Card>
        </Grid>
        
      ))}
      
      </Grid>
    
    </div>
  );
}
