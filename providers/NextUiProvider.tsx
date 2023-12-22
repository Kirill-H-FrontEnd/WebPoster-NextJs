"use client";
import { NextUIProvider } from "@nextui-org/react";

const NextUiProvider = ({ children }: any) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUiProvider;
