import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedOutlet = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {outlet && React.cloneElement(outlet, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
