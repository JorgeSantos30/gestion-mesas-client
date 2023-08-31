import * as yup from "yup";

export const addTableValidate = yup.object().shape({
  nameTable: yup.string().trim().required("El nombre de mesa es requerido"),
  numberStarters: yup.number().required("El numero de comensales es requerido"),
  status: yup
    .string()
    .required('El campo "disponible" es requerido')
    .oneOf(
      ["Disponible", "Ocupada", "Reservada"],
      "El valor seleccionado no es válido"
    ),
  area: yup.string().trim().required("El campo area es requerido"),
});

export const addWaitValidate = yup.object().shape({
  nameClient: yup
    .string()
    .trim()
    .required("El nombre del cliente es requerido"),
  numberStarters: yup.number(),
});

export const editTableValidate = yup.object().shape({
  nameTable: yup.string().trim(),
  numberStarters: yup.number(),
  status: yup
    .string()
    .oneOf(
      ["Disponible", "Ocupada", "Reservada"],
      "El valor seleccionado no es válido"
    ),
  area: yup.string().trim(),
});
