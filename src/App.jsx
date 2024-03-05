import React from "react";
import { Container, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
  return (
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon />
                <Typography variant="h6">
                    Photo Album.
                </Typography>
            </Toolbar>
        </AppBar>
        <script src="script.js"></script>
        <main>
            <div>
                <Container>
                <div id="emailOutput">Generated Email:</div>
                </Container>
            </div>
        </main>
    </>
  );
};

export default App;
