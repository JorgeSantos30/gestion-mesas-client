import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { useMesaContext } from "../context/MesaContext.jsx";

const StatisticsSection = () => {
  const { mesas } = useMesaContext();

  const [mesasDisponibles, setMesasDisponibles] = useState(0);
  const [mesasOcupadas, setMesasOcupadas] = useState(0);
  const [mesasReservadas, setMesasReservadas] = useState(0);

  useEffect(() => {
    const actualizarEstadisticas = () => {
      const disponibles = mesas.filter(
        (mesa) => mesa.status === "Disponible"
      ).length;
      const ocupadas = mesas.filter((mesa) => mesa.status === "Ocupada").length;
      const reservadas = mesas.filter(
        (mesa) => mesa.status === "Reservada"
      ).length;

      setMesasDisponibles(disponibles);
      setMesasOcupadas(ocupadas);
      setMesasReservadas(reservadas);
    };

    actualizarEstadisticas(); // Actualizar al montar el componente


    return () => {
    };
  }, [mesas]);

  const totalMesas = mesas.length;

  return (
    <Box marginTop={10} display="flex" justifyContent="center">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Mesas</Typography>
              <Typography variant="h4">{totalMesas}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Disponibles</Typography>
              <Typography variant="h4">{mesasDisponibles}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Ocupadas</Typography>
              <Typography variant="h4">{mesasOcupadas}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5">Reservadas</Typography>
              <Typography variant="h4">{mesasReservadas}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsSection;
