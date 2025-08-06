import React from "react";
import BoxExample from "../components/BoxExample";
import BoxDrag from "../components/BoxDrag";
import ClickToShowText from "../components/ClickToShowText";
import ScrollAnimation from "../components/ScrollAnimation";
import AllMotionApply from "../components/AllMotionApply";
import TailwindAnimatedButton from "../components/TailwindAnimatedButton ";

const Home = () => {
  return (
    <div>
      <ScrollAnimation />

      <TailwindAnimatedButton />
      <AllMotionApply />
      <ClickToShowText />
      <BoxDrag />
      <BoxExample />
    </div>
  );
};

export default Home;
