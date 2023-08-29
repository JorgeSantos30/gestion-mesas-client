import { instance } from "./base.api";

const endpoints = {
  getAll: "/waits",
  addNew: "/add-wait",
};

export const waits = {
  getAll: function () {
    return instance.get(endpoints.getAll);
  },
  addNew: function (nameClient, numberStarters) {
    return instance.post(endpoints.addNew, {
      nameClient: nameClient,
      numberStarters: numberStarters,
    });
  },
};
