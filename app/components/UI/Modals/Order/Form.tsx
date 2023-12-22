// React
import { FC } from "react";
// Lib(TOAST)
import toast from "react-hot-toast";
// Components
import { MyInput } from "../../Input/Input";
import SubmitBtn from "../../Button/SubmitBtn";
import { Input } from "@nextui-org/react";

export const Form: FC = ({}) => {
  return (
    <form
      action={async (formData) => {
        toast.success("Email sent successfully!");
      }}
    >
      <MyInput
        size="sm"
        style="mb-3"
        variant="underlined"
        label="What's your name?"
        name="name"
        type="text"
      />
      <MyInput
        size="sm"
        variant="underlined"
        label="Enter your email here"
        name="email"
        type="email"
      />

      <SubmitBtn
        value="Send"
        radius="sm"
        size="lg"
        styles="bg-gradient-to-br from-blue to-green text-white"
      />
    </form>
  );
};
