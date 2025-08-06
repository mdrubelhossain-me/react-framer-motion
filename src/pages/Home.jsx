import React from "react";
import BoxExample from "../components/BoxExample";
import BoxDrag from "../components/BoxDrag";
import ClickToShowText from "../components/ClickToShowText";
import ScrollAnimation from "../components/ScrollAnimation";
import AllMotionApply from "../components/AllMotionApply";

const Home = () => {
  return (
    <div>
      <ScrollAnimation />
      <AllMotionApply />
      <ClickToShowText />
      <BoxDrag />
      <BoxExample />
    </div>
  );
};

export default Home;
