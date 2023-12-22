// React
import React, { useContext } from "react";
import { useFormStatus } from "react-dom";
// Providers
import { useModalContext } from "@/providers/ModalProvider";
// NextUI
import { Button } from "@nextui-org/react";
// Model
type TButton = {
  radius: "none" | "sm" | "md" | "lg" | "full";
  size: "sm" | "md" | "lg";
  styles?: string;
  value: string;
};

export default function SubmitBtn({ radius, size, styles, value }: TButton) {
  const { onClose } = useContext(useModalContext);
  const { pending } = useFormStatus();

  return (
    <Button
      onPress={() => setTimeout(onClose, 2000)}
      className={styles}
      radius={radius}
      fullWidth
      type="submit"
      disabled={pending}
      size={size}
    >
      {pending ? (
        <div className="  h-5 w-5 animate-spin rounded-full border-b-2 border-white m-auto"></div>
      ) : (
        value
      )}
    </Button>
  );
}
