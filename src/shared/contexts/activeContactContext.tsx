import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

const ActiveContactContext = createContext<
  {
    activeContact: ActiveContact | null,
    setActiveContact: Dispatch<SetStateAction<ActiveContact | null>>
  }>({ activeContact: null, setActiveContact: () => { } });

export const ActiveContactContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [activeContact, setActiveContact] = useState<ActiveContact | null>(null);

  return (
    <ActiveContactContext.Provider value={{ activeContact, setActiveContact }}>
      {children}
    </ActiveContactContext.Provider>
  );
};

export const useActiveContactContext = () => {
  const data = useContext(ActiveContactContext);
  return data;
}

export type ActiveContact = {
  name: string;
  id: string;
}
