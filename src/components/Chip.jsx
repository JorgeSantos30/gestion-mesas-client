import * as React from "react";
import Chip from "@mui/material/Chip";

export default function ChipComponent({ state }) {
  let chipColor = "";
  switch (state) {
    case "Disponible":
      chipColor = "green";
      break;
    case "Ocupada":
      chipColor = "red";
      break;
    case "Reservada":
      chipColor = "orange";
      break;
    default:
      chipColor = "default";
  }
  return (
    <Chip
      label={state}
      style={{ backgroundColor: chipColor, color: "white" }}
    />
  );
}
