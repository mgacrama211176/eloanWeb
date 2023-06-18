import React, { useState, useEffect } from "react";
import { theme } from "../../theme/theme";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { forgotStyle } from "./styles";

const Forgot = () => {
  const nav = useNavigate();
  return (
    <motion.div
      className={forgotStyle.allCenter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div>
        <div className={`${forgotStyle.container} bg-[#091E35]`}>
          <p className={forgotStyle.title}>FORGOT PASSWORD?</p>
          <p className={theme.secondaryColorText}>No worries we got you!</p>

          <input
            type="text"
            placeholder="Phone Number"
            className={theme.inputs}
          />

          <button className={theme.submitBtn}>Submit</button>
          <div className="flex flex-col items-center">
            <p> "Not yet registered?""</p>
            <span
              className="cursor-pointer"
              onClick={() => nav("/login", { state: true })}
            >
              Click here!
            </span>
          </div>
          <div className="flex flex-col items-center font-light hover:font-black">
            <span
              className="cursor-pointer"
              onClick={() => nav("/login", { state: false })}
            >
              Already have an account?
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Forgot;
