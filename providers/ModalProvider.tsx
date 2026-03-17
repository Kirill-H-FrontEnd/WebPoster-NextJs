"use client";
// NextUi
import { useDisclosure } from "@nextui-org/react";
// React
import { FC, createContext } from "react";

interface IContext {
  children: React.ReactNode;
}

interface IModalContext {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  onClose: () => void;
}

export const useModalContext = createContext<IModalContext>({
  isOpen: false,
  onOpen: () => {},
  onOpenChange: () => {},
  onClose: () => {},
});

const ModalProvider: FC<IContext> = ({ children }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <useModalContext.Provider value={{ isOpen, onOpen, onOpenChange, onClose }}>
      {children}
    </useModalContext.Provider>
  );
};

export default ModalProvider;
