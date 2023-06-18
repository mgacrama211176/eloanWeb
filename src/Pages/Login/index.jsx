import React, { useState, useEffect } from "react";
import { theme } from "../../theme/theme";
import { loginStyle } from "./styles";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

//icons
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationCity, MdPhone, MdLock } from "react-icons/md";

const Login = () => {
  const nav = useNavigate();
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
              <p className={theme.secondaryColorText}>
                Please enter your details!
              </p>
            </>
          )}

          {login ? (
            <>
              <div className={loginStyle.inputContainer}>
                <MdPhone
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />

                <input
                  type="number"
                  placeholder="Phone Number"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>
              <div className={loginStyle.inputContainer}>
                <MdLock
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>
            </>
          ) : (
            <>
              <div className={loginStyle.inputContainer}>
                <MdPhone
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />

                <input
                  type="number"
                  placeholder="Phone Number"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>

              <div className={loginStyle.inputContainer}>
                <MdLock
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>
              <div className={loginStyle.inputContainer}>
                <MdLock
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>
              <div className={loginStyle.inputContainer}>
                <BsFillPersonFill
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>

              <div className={loginStyle.inputContainer}>
                <MdLocationCity
                  size={25}
                  className={loginStyle.iconStyle}
                  color="#091E35"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className={theme.inputs + " pl-12"} // Add 'pl-8' to add left padding
                />
              </div>
            </>
          )}

          <div className="absolute bottom-4 gap-4 flex flex-col">
            <button className={theme.submitBtn}>Submit</button>

            <div className="flex flex-col items-center">
              <p>{login ? "Not yet registered?" : "Already registered?"}</p>
              <span onClick={() => setLogin(!login)} className="cursor-pointer">
                Click here!
              </span>
            </div>
            <div className="flex flex-col items-center font-light hover:font-black">
              <span className="cursor-pointer" onClick={() => nav("/forgot")}>
                Forgot your password?
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
