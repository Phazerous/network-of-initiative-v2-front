import React, { ReactNode, useContext } from 'react';

export const ActionMenuContext = React.createContext({});

export const useActionMenu = () => {
  return useContext(ActionMenuContext) as {
    actionMenu: ReactNode;
    setActionMenu: (node: ReactNode | undefined) => void;
  };
};
