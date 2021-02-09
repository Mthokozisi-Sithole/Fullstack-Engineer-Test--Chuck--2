import React from "react";

import Nav from "./nav/nav";
import Joker from "./joke/Joker";

const RightSider: React.FC = (): JSX.Element => (
  <div className="rightSider center">
    <Nav />
    <Joker />
  </div>
);

export default RightSider;
