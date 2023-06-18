import React, { useState, useEffect } from "react";
import { theme } from "../../theme/theme";
import { loginStyle } from "./styles";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const client = location.state;

  const [login, setLogin] = useState(true);

  useEffect(() => {
    client ? setLogin(false) : setLogin(true);
  }, []);

  return (
    <motion.div
      className={loginStyle.allCenter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div>
        <div className={`${loginStyle.container} bg-[#091E35]`}>
          {login ? (
            <>
              <p className={loginStyle.title}>WELCOME BACK!</p>
              <p className={theme.secondaryColorText}>
                Welcome back! Please enter your details!
              </p>
            </>
          ) : (
            <>
              <p className={loginStyle.title}>WERE EXCITED TO HAVE YOU!</p>
              <p>Please enter your details!</p>
            </>
          )}

          {login ? (
            ""
          ) : (
            <>
              <input
                type="text"
                placeholder="Username"
                className={theme.inputs}
              />
              <input
                type="text"
                placeholder="Address"
                className={theme.inputs}
              />
            </>
          )}
          <input
            type="text"
            placeholder="Phone Number"
            className={theme.inputs}
          />
          <input
            type="password"
            placeholder="Password"
            className={theme.inputs}
          />
          <button className={theme.submitBtn}>Submit</button>
          <div className="flex flex-col items-center">
            <p>{login ? "Not yet registered?" : "Already registered?"}</p>
            <span onClick={() => setLogin(!login)} className="cursor-pointer">
              Click here!
            </span>
          </div>
          <div className="flex flex-col items-center font-light hover:font-black">
            <span className="cursor-pointer">Forgot your password?</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
