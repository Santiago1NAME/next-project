import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export default function Posts() {

  return (
    <Grid container spacing={3}>
        <Grid item={true} xs={12} md={6} lg={4}>
        <Card id='prueba' sx={{
            backgroundColor: { xs: "red", md: "green", lg: "blue"}, border: { xs: "3px solid white", md: "3px solid yellow", lg: "3px solid red"} }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    </Grid>
  )
}
