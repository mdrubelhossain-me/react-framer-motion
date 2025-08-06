import React from "react";
import BoxExample from "../components/BoxExample";
import BoxDrag from "../components/BoxDrag";
import ClickToShowText from "../components/ClickToShowText";
import ScrollAnimation from "../components/ScrollAnimation";
import AllMotionApply from "../components/AllMotionApply";
import TailwindAnimatedButton from "../components/TailwindAnimatedButton ";
import Focus from "../components/Focus";
import Propagation from "../components/Propagation";
import SVGs from "../components/SVGs";
import LayoutAnimation from "../components/LayoutAnimation";
import LayoutToggleCard from "../components/LayoutToggleCard ";
import AnimatesPresence from "../components/AnimatesPresence";
import App from "../components/Modal";

const Home = () => {
  return (
    <div>
      <ScrollAnimation />
      <App/>
      <AnimatesPresence />
      <LayoutToggleCard />
      <LayoutAnimation />
      <SVGs />
      <Propagation />
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
