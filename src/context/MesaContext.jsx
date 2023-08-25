import React, { createContext, useContext, useState } from "react";

const MesaContext = createContext();

export const MesaProvider = ({ children }) => {
  const [mesas, setMesas] = useState([]);

  const updateMesas = (updatedMesas) => {
    setMesas(updatedMesas);
  };

  return (
    <MesaContext.Provider value={{ mesas, updateMesas }}>
      {children}
    </MesaContext.Provider>
  );
};

export const useMesaContext = () => useContext(MesaContext);
