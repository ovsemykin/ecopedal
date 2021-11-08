import React from "react";
import EmotionalBlock from "../emotionalBlock";
import TargetButton from "../targetButton";
import girl_wash_dishes from "../../img/home_page/girl_wash_dishes.jpg";
import ecopedal_collage from "../../img/home_page/ecopedal_collage.jpg";

const Home = () => {
  return (
    <>
      <EmotionalBlock
        isImgLeft={true}
        background={girl_wash_dishes}
        img={ecopedal_collage}
        heading="ЭКОПЕДАЛЬ"
        text="ЭТО САМЫЙ УДОБНЫЙ И ЭКОНОМИЧНЫЙ СПОСОБ ВКЛЮЧАТЬ ВОДУ НА КУХНЕ"
        button={<TargetButton />}
      />
    </>
  );
};
export default Home;
