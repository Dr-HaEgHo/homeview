"use client";

import React, {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

interface ContextProps {
  customLayout: boolean;
  setCustomLayout: Dispatch<SetStateAction<boolean>>;
  globalLoading?: boolean;
  setGlobalLoading?: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<ContextProps>({
  customLayout: false,
  setCustomLayout: (): boolean => false,
  globalLoading: false,
  setGlobalLoading: (): boolean => false,
});

const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customLayout, setCustomLayout] = useState<boolean>(false);
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        customLayout,
        setCustomLayout,
        globalLoading,
        setGlobalLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider

// export const useGlobalContext = useContext(GlobalContext);
