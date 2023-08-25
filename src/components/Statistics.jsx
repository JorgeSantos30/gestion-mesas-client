// StatisticsSection.js
import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { useMesaContext } from "../context/MesaContext.jsx";

const StatisticsSection = () => {
  const { mesas } = useMesaContext();

  const totalMesas = mesas.length;
  const mesasDisponibles = mesas.filter(
    (mesa) => mesa.estado === "disponible"
  ).length;
  const mesasOcupadas = mesas.filter(
    (mesa) => mesa.estado === "ocupada"
  ).length;
  const mesasReservadas = mesas.filter(
    (mesa) => mesa.estado === "reservada"
  ).length;

  return (
    <Box marginTop={10} display="flex" justifyContent="center">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total de Mesas</Typography>
              <Typography variant="h4">{totalMesas}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Mesas Disponibles</Typography>
              <Typography variant="h4">{mesasDisponibles}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Mesas Ocupadas</Typography>
              <Typography variant="h4">{mesasOcupadas}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Mesas Reservadas</Typography>
              <Typography variant="h4">{mesasReservadas}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsSection;
