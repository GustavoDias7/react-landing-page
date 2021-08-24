import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [modal, setModal] = React.useState(false);

  function handleModal() {
    setModal(!modal);
  }

  return (
    <GlobalContext.Provider value={{ modal, handleModal }}>
      {children}
    </GlobalContext.Provider>
  );
};
