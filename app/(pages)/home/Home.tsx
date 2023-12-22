// React
import { FC } from "react";
// Components
import { Hero } from "./components/hero/Hero";
import { Advantages } from "./components/advantages/Advantages";
import { OurServices } from "./components/ourServices/OurServices";
import { Prices } from "./components/prices/Prices";
import { Contacts } from "./components/Contacts/Contacts";
import { Additions } from "./components/Additions/Additions";
import { HowWeWork } from "./components/howWeWork/HowWeWork";
import { FAQ } from "./components/FAQ/FAQ";
import { BannerSendRequest } from "@/app/components/BannerSendRequest/BannerSendRequest";
// Providers
import ButtonScrollProvider from "@/providers/ButtonScroll";

export const HomePage: FC = ({}) => {
  return (
    <>
      <ButtonScrollProvider>
        <Hero />
        <Advantages />
        <OurServices />
        <Prices />
        <Contacts />
        <HowWeWork />
        <Additions />
        <FAQ />
        <BannerSendRequest />
      </ButtonScrollProvider>
    </>
  );
};
