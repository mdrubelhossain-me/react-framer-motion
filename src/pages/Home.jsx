import React from "react";
import BoxExample from "../components/BoxExample";
import BoxDrag from "../components/BoxDrag";
import ClickToShowText from "../components/ClickToShowText";
import ScrollAnimation from "../components/ScrollAnimation";
import AllMotionApply from "../components/AllMotionApply";
import TailwindAnimatedButton from "../components/TailwindAnimatedButton ";
import Focus from "../components/Focus";

const Home = () => {
  return (
    <div>
      <ScrollAnimation />
      <Focus />
      <TailwindAnimatedButton />
      <AllMotionApply />
      <ClickToShowText />
      <BoxDrag />
      <BoxExample />
    </div>
  );
};

export default Home;
