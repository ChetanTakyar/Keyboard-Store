import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function SpacingGrid() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 200,
                  width: 250,
                  p: 3,
                  // backgroundColor: (theme) =>
                  // theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Typography>This is an item I am totally selling xd</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
