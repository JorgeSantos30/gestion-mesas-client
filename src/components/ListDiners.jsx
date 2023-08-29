import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { waits } from "../api/waits.js";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "nameClient",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "numberStarters",
    headerName: "N° Comensales",
    width: 150,
    editable: true,
  },
];

export default function ListDiners() {
  const [allWaits, setAllWaits] = useState([]);

  const fetchWaits = () => {
    waits
      .getAll()
      .then((r) => {
        const fetchedWaits = r.data.waits;
        setAllWaits(fetchedWaits);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchWaits(); // Llama a fetchWaits cuando el componente se monta
  }, [allWaits]); // El segundo argumento vacío indica que se ejecuta solo al montar

  return (
    <Box sx={{ height: 300, width: "100%", mt: "40px" }}>
      <DataGrid
        rows={allWaits}
        columns={columns}
        rowHeight={38}
        getRowId={(row) => row._id} // Usar el campo _id como id único
        columnBuffer={8}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
