import React from "react";
import { theme } from "../../theme/theme";
import { style } from "./style";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div>
        <img src="" alt="logo here" />
      </div>
      <div className="flex flex-row gap-4">
        <Link to={"/"}>
          <div className={style.header}>HOME</div>
        </Link>
        <div className={style.header}>ABOUT</div>
        <div className={style.header}>CONTACT US</div>
        <div className={style.header}>SUPPORT</div>
      </div>
      <div>
        <Link to={"login"}>
          <button className={theme.submitBtn}>LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
