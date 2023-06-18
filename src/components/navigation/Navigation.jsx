import React from "react";
import { theme } from "../../theme/theme";
import { style } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="E-loan" className="rounded-xl w-24" />
        </Link>
      </div>
      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
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
