import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import GroupIcon from "@mui/icons-material/Group";

const TableCard = ({ nameTable, numberStarters, status }) => {
  return (
    <Card>
      <CardContent>
        <h2>
          <TableRestaurantIcon /> {nameTable}
        </h2>
        <Divider />
        <p>
          <GroupIcon /> {numberStarters}
        </p>
        <Divider />
        <p> {status}</p>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button fullWidth variant="contained">Modificar</Button>
        <Button fullWidth variant="outlined">Eliminar</Button>
      </CardActions>
    </Card>
  );
};

export default TableCard;
