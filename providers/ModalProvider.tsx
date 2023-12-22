"use client";
// NextUi
import { useDisclosure } from "@nextui-org/react";
// React
import { FC, createContext } from "react";

interface IContext {
  children: React.ReactNode;
}
// useHeaderContext
export const useModalContext = createContext<boolean | any>(false);
const ModalProvider: FC<IContext> = ({ children }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <useModalContext.Provider value={{ isOpen, onOpen, onOpenChange, onClose }}>
      {children}
    </useModalContext.Provider>
  );
};

export default ModalProvider;
