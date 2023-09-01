import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { addWaitValidate } from "../../utils/ValidateForm";
import { waits } from "../../api/waits.js";
import { useNavigate } from "react-router-dom"; // Utiliza useNavigate en lugar de useHistory

const AddWaitPage = () => {
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const formik = useFormik({
    initialValues: {
      nameClient: "",
      numberStarters: 0,
    },
    validationSchema: addWaitValidate,
    onSubmit: (values) => {
      const { nameClient, numberStarters } = values;
      const parsedNumberStarters = parseInt(numberStarters);
      waits.addNew(nameClient, parsedNumberStarters);
      navigate("/");
      window.location.reload(true);
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
              Agregar a lista:
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                name="nameClient"
                label="Nombre del cliente"
                sx={{ mt: 2, mb: 1.5 }}
                margin="normal"
                type="text"
                value={formik.values.nameClient}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameClient && Boolean(formik.errors.nameCient)
                }
                helperText={
                  formik.touched.nameClient && formik.errors.nameClient
                }
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
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Agregar a la lista
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddWaitPage;
