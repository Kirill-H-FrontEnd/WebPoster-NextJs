import { FC, useContext } from "react";
import { Button } from "@nextui-org/react";
import { useModalContext } from "@/providers/ModalProvider";

type TButton = {
  value: string;
  className?: string;
  size: "sm" | "md" | "lg";
  radius: "sm" | "md" | "lg" | "none" | "full";
  onClick?: () => void;
};

export const ButtonGradient: FC<TButton> = ({
  value,
  className,
  size,
  radius,
  onClick,
}) => {
  const { onOpen } = useContext(useModalContext);

  const handleClick = () => {
    onOpen();
    onClick?.();
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      radius={radius}
      className={`${className} shadow px-5 bg-gradient-to-br from-blue to-green text-white font-medium`}
    >
      {value}
    </Button>
  );
};
