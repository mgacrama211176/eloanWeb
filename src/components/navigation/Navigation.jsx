import React from "react";
import { theme } from "../../theme/theme";
import { style } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div>
        <img src="" alt="logo here" />
      </div>
      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to={"/"}>
          <div className={style.header}>HOME</div>
        </Link>
        <div className={style.header}>ABOUT</div>
        <div className={style.header}>CONTACT US</div>
        <div className={style.header}>SUPPORT</div>
      </motion.div>
      <div>
        <Link to={"login"}>
          <button className={theme.submitBtn}>LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
