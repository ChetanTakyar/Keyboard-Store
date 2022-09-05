import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function SpacingGrid() {
  return (
    <Grid container flexGrow={"1"} display={"flex"} rowSpacing={4} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
    {Array.from(Array(24)).map((_, index) => (
      <Grid item  alignItems={"center"} key={index}>
          <Paper
            sx={{
              height: 250,
              width: 200,
              p: 3,
            }}>
              
            <Typography>This is an item I am totally selling</Typography>
          </Paper>
      </Grid>
      
    ))}
    
    </Grid>
  );
}
