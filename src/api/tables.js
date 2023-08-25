import { instance } from "./base.api";

const endpoints = {
  getAll: "/tables",
  addNew: "/register-table",
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
};
