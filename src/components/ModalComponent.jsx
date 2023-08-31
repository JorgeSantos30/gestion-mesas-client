import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { editTableValidate } from "../utils/ValidateForm";
import {
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent({ onClose, open }) {
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const formik = useFormik({
    initialValues: {
      nameTable: "",
      numberStarters: 0,
      status: "Disponible",
      area: "Salón",
    },
    validationSchema: editTableValidate,
    onSubmit: (values) => {
      const { nameTable, numberStarters, status, area } = values;
      const parsedNumberStarters = parseInt(numberStarters);
      tables.addNew(nameTable, parsedNumberStarters, status, area);
      navigate("/");
    },
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Paper>
          <Typography variant="h4">
            Editar mesa:
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name="nameTable"
              label="Nombre de mesa"
              sx={{ mt: 2, mb: 1.5 }}
              margin="normal"
              type="text"
              value={formik.values.nameTable}
              onChange={formik.handleChange}
              error={
                formik.touched.nameTable && Boolean(formik.errors.nameTable)
              }
              helperText={formik.touched.nameTable && formik.errors.nameTable}
            />
            <TextField
              fullWidth
              name="numberStarters"
              label="Numero de comensales"
              sx={{ mt: 1.5, mb: 1.5 }}
              margin="normal"
              type="number"
              value={formik.values.numberStarters}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 0 && value <= 20) {
                  formik.handleChange(e);
                }
              }}
              error={
                formik.touched.numberStarters &&
                Boolean(formik.errors.numberStarters)
              }
              helperText={
                formik.touched.numberStarters && formik.errors.numberStarters
              }
            />
            <InputLabel id="demo-simple-select-label">
              Selecciona area:
            </InputLabel>
            <Select
              name="area"
              sx={{ mt: 2, mb: 1.5 }}
              type="text"
              value={formik.values.area}
              onChange={formik.handleChange}
              error={formik.touched.area && Boolean(formik.errors.area)}
              fullWidth
            >
              <MenuItem value={"Salón"}>Salón</MenuItem>
              <MenuItem value={"Terraza"}>Terraza</MenuItem>
              <MenuItem value={"Juegos"}>Juegos</MenuItem>
            </Select>
            <InputLabel id="demo-simple-select-label">
              Selecciona disponibilidad:
            </InputLabel>

            <Select
              name="status"
              sx={{ mt: 2, mb: 1.5 }}
              type="text"
              value={formik.values.status}
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
              fullWidth
            >
              <MenuItem value={"Disponible"}>Disponible</MenuItem>
              <MenuItem value={"Ocupada"}>Ocupada</MenuItem>
              <MenuItem value={"Reservada"}>Reservada</MenuItem>
            </Select>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mt: 1.5, mb: 3 }}
            >
              Agregar mesa
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
}
