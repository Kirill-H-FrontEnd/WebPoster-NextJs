// React
import { FC } from "react";
// Next
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WebPoster | Prices",
  description:
    "Effective websites and the best solutions for your business offered!",
};
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import { Table } from "./components/Table/Table";
import { BannerSendRequest } from "@/app/components/BannerSendRequest/BannerSendRequest";
import { Card } from "./components/Card/Card";

const Prices: FC = ({}) => {
  return (
    <>
      <TitleBannerPage
        title="How Much Does a Website Cost?"
        supTitle="Our Prices"
        text="We offer five pricing plans, depending on your needs."
      />
      <Table />
      <Card />
      <BannerSendRequest />
    </>
  );
};

export default Prices;
