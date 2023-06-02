import React from "react";
import { theme } from "../../theme/theme";

const Navigation = () => {
  return (
    <div className="flex flex-row w-full justify-between mx-10 mt-5">
      <div className="flex flex-row gap-3 cursor-pointer">
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
        <div>SUPPORT</div>
      </div>
      <div>
        <button className={theme.button.submit}>LOGIN</button>
      </div>
    </div>
  );
};

export default Navigation;
