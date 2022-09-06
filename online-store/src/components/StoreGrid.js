import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Card, Typography } from "@mui/material";
import { borders } from '@mui/system';
import '../App.css';


export default function SpacingGrid() {
  return (
    <div className= "Grid-Container">
    
      <Grid container flexDirection="row" justifyContent={"flex-start"} spacing = {2} >
      {Array.from(Array(22)).map((_, index) => (
        <Grid item lg ={2} flexGrow={1} alignItems={"center"} key={index}> 
            <Card
              sx={{
                height: 250,
                minWidth: 200,
                p: 3,
              }}>
                
              <Typography>This is an item I am totally selling</Typography>
            </Card>
        </Grid>
        
      ))}
      
      </Grid>
    
    </div>
  );
}
