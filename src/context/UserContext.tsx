import { createContext, useCallback, useEffect, useState } from "react";

type UserContextType = {
  name: string;
  saveName: (name: string) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const saveName = useCallback((name: string) => {
    localStorage.setItem("name", name);
    setName(name);
  }, []);

  return (
    <UserContext.Provider value={{ name, saveName }}>
      {children}
    </UserContext.Provider>
  );
}
