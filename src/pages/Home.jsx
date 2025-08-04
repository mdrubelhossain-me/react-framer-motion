import React from "react";
import BoxExample from "../components/BoxExample";
import BoxDrag from "../components/BoxDrag";
import ClickToShowText from "../components/ClickToShowText";

const Home = () => {
  return (
    <div>
        <ClickToShowText/>
      <BoxDrag />
      <BoxExample />
    </div>
  );
};

export default Home;
