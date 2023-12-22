// React
import { FC } from "react";
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";

const Contacts: FC = ({}) => {
  return (
    <>
      <TitleBannerPage
        supTitle="Our Contacts"
        text="Fill out the form, and we will contact you shortly to help you choose the best pricing plan and discuss all the nuances."
        title="Do You Want to Order a New Website?"
      />
    </>
  );
};

export default Contacts;
