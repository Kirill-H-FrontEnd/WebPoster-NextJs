// React
import { FC } from "react";
// NextUi
import { Input } from "@nextui-org/react";
// Model
type TInput = {
  label: string;
  type: string;
  name: string;
  variant: "flat" | "faded" | "bordered" | "underlined";
  style?: string;
  size: "sm" | "md" | "lg";
};

export const MyInput: FC<TInput> = ({
  label,
  type,
  name,
  variant,
  style,
  size,
}) => {
  return (
    <Input
      onClear={() => console.log("clear")}
      isClearable
      className={`${style} text-blue `}
      description={`We'll never share your ${name} with anyone else.`}
      size={size}
      isRequired
      name={name}
      label={label}
      type={type}
      variant={variant}
      color="default"
      style={{ fontSize: "16px" }}
    />
  );
};
