import React from "react";

import { useSpring, animated } from "react-spring";
interface Props {
  children: React.ReactNode;
}
const Cart: React.FC<Props> = ({ children }): JSX.Element => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <animated.div className="cart contenair" style={props}>
      {children}
    </animated.div>
  );
};

export default Cart;
