import React from "react";
import { theme } from "../../theme/theme";
import { style } from "./style";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div>
        <img src="" alt="logo here" />
      </div>
      <div className="flex flex-row gap-5">
        <div className={style.header}>HOME</div>
        <div className={style.header}>ABOUT</div>
        <div className={style.header}>CONTACT US</div>
        <div className={style.header}>SUPPORT</div>
      </div>
      <div>
        <button className={theme.submitBtn}>LOGIN</button>
      </div>
    </div>
  );
};

export default Navigation;
