import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import GroupIcon from "@mui/icons-material/Group";
import { tables } from "../api/tables";
import ChipComponent from "./Chip";
import ModalComponent from "./ModalComponent";
import { useState } from "react";

const TableCard = ({ nameTable, numberStarters, status, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  let borderColor = "";

  switch (status) {
    case "Disponible":
      borderColor = "green";
      break;
    case "Ocupada":
      borderColor = "red";
      break;
    case "Reservada":
      borderColor = "orange";
      break;
    default:
      borderColor = "default";
  }
  return (
    <Card sx={{ border: `2px solid ${borderColor}` }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <TableRestaurantIcon />
          </Grid>
          <Grid item xs>
            {nameTable}
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <GroupIcon />
          </Grid>
          <Grid item xs>
            {numberStarters}
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 1 }}
        >
          <Grid item xs>
            <ChipComponent state={status}></ChipComponent>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />

      <CardActions>
        <Button variant="outlined" onClick={handleOpenModal}>
          Modificar
        </Button>

        <Button
          color="error"
          onClick={() => tables.deleteById(id)}
          variant="outlined"
        >
          Eliminar
        </Button>
      </CardActions>
      <ModalComponent open={openModal} onClose={handleCloseModal} />
    </Card>
  );
};

export default TableCard;
