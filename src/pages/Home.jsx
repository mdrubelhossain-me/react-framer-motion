import React from "react";
import BoxExample from "../components/BoxExample";
import BoxDrag from "../components/BoxDrag";
import ClickToShowText from "../components/ClickToShowText";
import ScrollAnimation from "../components/ScrollAnimation";

const Home = () => {
  return (
    <div>
      <ScrollAnimation />
      <ClickToShowText />
      <BoxDrag />
      <BoxExample />
    </div>
  );
};

export default Home;
