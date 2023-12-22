"use client";
// React
import { FC, useContext } from "react";
// Next
import Link from "next/link";
// Context
import { useModalContext } from "@/providers/ModalProvider";
// Components
import { Form } from "./Form";
// NextUI
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export const OrderModal: FC = ({}) => {
  const { isOpen, onOpenChange } = useContext(useModalContext);
  return (
    <>
      <Modal
        className="bg-white dark:bg-black"
        placement="center"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className={`p-8`}>
          <ModalHeader className="grid text-center p-0 mb-5">
            <h2 className="text-black dark:text-white text-3xl sm:text-4xl mb-2 ">
              Need a Website?
            </h2>
            <p className="text-gray text-sm font-normal">
              Fill out the form, and we will contact you via email you shortly
              to help you choose the best pricing plan, discuss the details, and
              start developing your website.
            </p>
          </ModalHeader>
          <ModalBody className="p-0">
            <Form />
          </ModalBody>
          <ModalFooter className="grid justify-center p-0 text-xs font-normal mt-2">
            <p className="text-gray">
              By clicking the button, you agree to the
              <Link className="ml-1 text-blue dark:text-green " href={"/"}>
                processing of personal data.
              </Link>
            </p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
