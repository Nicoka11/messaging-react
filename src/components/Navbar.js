import navStyles from "./Navbar.module.scss";
import Lottie from "react-lottie";
import burgerMenuAnim from "../lotties/burgerMenuBlack.json";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(0);

  const toggleMenuHandler = () => {
    setToggleMenu(toggleMenu ? 0 : 1);
  };

  const defaultOptions = {
    progress: toggleMenu,
    loop: false,
    autoplay: false,
    animationData: burgerMenuAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={navStyles.nav}>
      <div className={navStyles.burgerContainer} onClick={toggleMenuHandler}>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Navbar;
