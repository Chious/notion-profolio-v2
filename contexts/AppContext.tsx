import React, { createContext, useState, useContext } from "react";

interface DisplayProject {
  page: number;
  totalPage: number;
  data: any[];
}

interface AppContextType {
  project: any[];
  setProject: React.Dispatch<React.SetStateAction<any[]>>;
  displayProject: DisplayProject;
  setDisplayProject: React.Dispatch<React.SetStateAction<DisplayProject>>;
}

const defaultAppContext: AppContextType = {
  project: [],
  setProject: () => {},
  displayProject: {
    page: 1,
    totalPage: 1,
    data: [],
  },
  setDisplayProject: () => {},
};
const AppContext = createContext(defaultAppContext);

export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [project, setProject] = useState<any[]>([]);
  const [displayProject, setDisplayProject] = useState<DisplayProject>({
    page: 1,
    totalPage: 1,
    data: [],
  });

  return (
    <AppContext.Provider
      value={{
        project,
        setProject,
        displayProject,
        setDisplayProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
