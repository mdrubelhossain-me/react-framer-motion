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
import AccordionGroup from "../components/Accordion ";
import TransformScrollYProgress from "../components/TransformScrollYProgress";

const Home = () => {
  return (
    <div>
      <ScrollAnimation />
      <TransformScrollYProgress/>
      <AccordionGroup/>
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
