import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const HomePage=()=> {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        margin:"10px",
        backgroundColor: " rgba(250, 235, 215, 0.801)",
        justifyItems: "center",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Task Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Witaj w Task-Manager - Twój Wszechstronny Asystent do Zarządzania
            Zadaniami. Czy kiedykolwiek czułeś się przytłoczony mnogością zadań
            do wykonania i brakiem odpowiedniej organizacji? Nasza aplikacja do
            zarządzania zadaniami ma na celu rozwiązać ten problem i ułatwić Ci
            życie!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
