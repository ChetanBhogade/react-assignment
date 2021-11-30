import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-movies")
      .then((response) => {
        console.log("response from api: - ", response);
        setMoviesData(response.data.data);
      })
      .catch((error) => {
        console.log("got an error: - ", error);
      });
  }, []);

  return (
    <div>
      <Grid container>
        {moviesData.map((item) => {
          return (
            <Grid key={item.id} item xs={4}>
              <Container style={{ padding: "25px" }}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.releaseDate}
                    </Typography>
                    <Typography variant="body2">
                      rating: - {item.rating}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Container>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
