import React from "react";
import { theme } from "../../theme/theme";
import { style } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/Logo.png";

const Navigation = ({ user }) => {
  const menuGuestArrays = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "CONTACT US", path: "/contact" },
    { title: "SUPPORT", path: "/support" },
  ];

  const menuUserArray = [
    { title: "Dashboard", path: "/userRoute/dashboard" },
    { title: "Clients", path: "/userRoute/clients" },
    { title: "Investors", path: "/userRoute/investors" },
    { title: "Collectors", path: "/userRoute/collectors" },
    { title: "Blocked", path: "/userRoute/blocked" },
  ];

  const menus = user ? menuUserArray : menuGuestArrays;

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
        {menus.map((menu) => (
          <div key={menu.title}>
            <Link to={menu.path}>
              <div className={style.header}>{menu.title}</div>
            </Link>
          </div>
        ))}
      </motion.div>
      <div>
        {user ? (
          <Link to={"/"}>
            <button className={theme.submitBtn}>Logout</button>
          </Link>
        ) : (
          <>
            <Link to={"login"}>
              <button className={theme.submitBtn}>LOGIN</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
