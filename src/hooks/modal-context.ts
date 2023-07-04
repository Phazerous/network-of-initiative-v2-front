import React, { ReactNode } from 'react';

export const ModalContext = React.createContext({});

export const useModalContext = () => {
  return React.useContext(ModalContext) as {
    setModal: (child: ReactNode | undefined) => void;
    modal: ReactNode | undefined;
  };
};
