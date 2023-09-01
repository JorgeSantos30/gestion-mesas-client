import { instance } from "./base.api";

const endpoints = {
  getAll: "/tables",
  addNew: "/register-table",
  deleteById: "/deleteById",
  editById: "/edit-table",
};

export const tables = {
  getAll: function () {
    return instance.get(endpoints.getAll);
  },
  addNew: function (nameTable, numberStarters, status, area) {
    return instance.post(endpoints.addNew, {
      nameTable: nameTable,
      numberStarters: numberStarters,
      status: status,
      area: area,
    });
  },
  deleteById: function (id) {
    return instance
      .delete(`${endpoints.deleteById}/${id}`)
      .then((response) => {
        console.log(`Mesa con el ID: ${id} eliminada.`);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  editTable: function (id, nameTable, numberStarters, status, area) {
    return instance
      .patch(`${endpoints.editById}/${id}`, {
        nameTable: nameTable,
        numberStarters: numberStarters,
        status: status,
        area: area,
      })
      .then((response) =>
        console.log(
          `La mesa con el ID: ${id} ha sido modificads. : ${response}`
        )
      );
  },
};
