import { FC, useContext } from "react";
// NextUI
import { Button } from "@nextui-org/react";
// Providers
import { useModalContext } from "@/providers/ModalProvider";
// Model
type TButton = {
  value: string;
  className?: string;
  size: "sm" | "md" | "lg";
  radius: "sm" | "md" | "lg" | "none" | "full";
};

export const ButtonGradient: FC<TButton> = ({
  value,
  className,
  size,
  radius,
}) => {
  const { onOpen } = useContext(useModalContext);
  return (
    <Button
      onClick={onOpen}
      size={size}
      radius={radius}
      className={`${className}  shadow px-5 bg-gradient-to-br from-blue to-green text-white  font-medium `}
    >
      {value}
    </Button>
  );
};
