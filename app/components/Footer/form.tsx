// React
import { FC } from "react";
// Lib(TOAST)
import toast from "react-hot-toast";
// NextUI
import { Input, Button } from "@nextui-org/react";
import SubmitBtn from "../UI/Button/SubmitBtn";
import { MyInput } from "../UI/Input/Input";

export const FooterForm: FC = ({}) => {
  return (
    <form
      action={async (formData) => {
        toast.success("Email sent successfully!");
      }}
    >
      <MyInput
        size="sm"
        variant="bordered"
        label="Enter your email here"
        name="email"
        type="email"
      />
      <Button
        size="md"
        type="submit"
        className="bg-black dark:bg-black_secondary text-white border-1 border-gray/30 "
      >
        Subscribe
      </Button>
    </form>
  );
};
