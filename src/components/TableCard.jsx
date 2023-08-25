import { Card, CardContent } from "@mui/material";

const TableCard = ({ nameTable, numberStarters }) => {
  return (
    <Card>
      <CardContent>
        <h2>Mesa de: {nameTable}</h2>
        <p>Comensales: {numberStarters}</p>
      </CardContent>
    </Card>
  );
};

export default TableCard;
