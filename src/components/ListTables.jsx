import React, { useState } from "react";
import TableCard from "./TableCard.jsx";
import { tables } from "../api/tables.js";
import { useEffect } from "react";
import { Checkbox, FormControlLabel, styled } from "@mui/material";
import { Grid } from "@mui/material";
import { useMesaContext } from "../context/MesaContext.jsx";

const ListTables = () => {
  const [alltables, setAllTables] = useState([]);
  const [selectedArea, setSelectedArea] = useState("all"); // Solo una área seleccionada
  const { updateMesas } = useMesaContext(); // Obtener la función updateMesas del contexto

  const fetchTables = () => {
    tables
      .getAll()
      .then((r) => {
        const fetchedTables = r.data.tables;
        updateMesas(fetchedTables);
        setAllTables(fetchedTables);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const handleAreaChange = (area) => {
    setSelectedArea(area); // Cambiar el área seleccionada
  };

  const filteredTables =
    selectedArea === "all"
      ? alltables
      : alltables.filter((table) => table.area === selectedArea); // Filtrar por el área seleccionada

  const CardsContainer = styled(Grid)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Cuatro columnas
    gap: theme.spacing(2), // Espacio entre tarjetas
    marginTop: theme.spacing(2),
  }));

  return (
    <div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedArea === "all"}
              onChange={() => handleAreaChange("all")}
              color="primary"
            />
          }
          label="Todas las mesas"
        />
        {/* Resto de los checkboxes */}
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedArea === "Salón"}
              onChange={() => handleAreaChange("Salón")}
              color="primary"
            />
          }
          label="Salón"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedArea === "Juegos"}
              onChange={() => handleAreaChange("Juegos")}
              color="primary"
            />
          }
          label="Juegos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedArea === "Terraza"}
              onChange={() => handleAreaChange("Terraza")}
              color="primary"
            />
          }
          label="Terraza"
        />
      </div>
      <CardsContainer>
        {filteredTables.map((table) => (
          <TableCard
            key={table._id}
            nameTable={table.nameTable}
            numberStarters={table.numberStarters}
            status={table.status}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default ListTables;
