import * as React from "react";
import Grid2 from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function SpacingGrid() {
  return (
    <Grid2
      sx={{ flexGrow: 1, maxWidth: "1800px", display: "flex" , alignItems:"center", justifyContent:"center"}}
      container
      spacing={2}
    >
      <Grid2 item xs={12}>
        <Grid2 container alignItems= "center" justifyContent="center" rowSpacing={4} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => (
            <Grid2  key={value} item>
              <Paper
                sx={{
                  minHeight: 200,
                  minWidth: 250,
                  p: 3,
                  // backgroundColor: (theme) =>
                  // theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Typography>This is an item I am totally selling xd</Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
