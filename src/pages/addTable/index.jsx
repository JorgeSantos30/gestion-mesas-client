import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { addTableValidate } from "../../utils/ValidateForm";
// import { tables } from "../../api/tables";
import { useNavigate } from "react-router-dom"; // Utiliza useNavigate en lugar de useHistory

const AddTablePage = () => {
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const formik = useFormik({
    initialValues: {
      nameTable: "",
      numberStarters: 0,
      status: "Disponible",
      area: "Salón",
    },
    validationSchema: addTableValidate,
    onSubmit: (values) => {
      const { nameTable, numberStarters, status, area } = values;
      const parsedNumberStarters = parseInt(numberStarters);
      tables.addNew(nameTable, parsedNumberStarters, status, area);
      navigate("/");
    },
  });

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em " }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Agregar nueva mesa:
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
                <MenuItem value={"SalónB"}>Salón B</MenuItem>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddTablePage;
