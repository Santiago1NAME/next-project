"use client";
import { Button, Container, Grid, Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function Home() {
  return (
    <Container maxWidth="lg">
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
        <Grid item={true} xs={12} md={6} lg={8}>
          <Card sx={{ backgroundColor: { xs: "red", md: "green", lg: "blue"}, }}>
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
        <Grid item={true} xs={12} md={6} lg={8}>
          <Card sx={{ backgroundColor: { xs: "red", md: "green", lg: "blue"}, }}>
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
        <Grid item={true} xs={12} md={6} lg={4}>
          <Card sx={{ backgroundColor: { xs: "red", md: "green", lg: "blue"}, }}>
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
    </Container>
  );
}