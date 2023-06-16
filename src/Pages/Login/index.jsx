import React, { useState } from "react";
import { theme } from "../../theme/theme";
import { loginStyle } from "./styles";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const client = location.state;
  console.log(location);

  const [login, setLogin] = useState(true);
  return (
    <div className={loginStyle.allCenter}>
      <div>
        <div className="p-10 border m-2 flex flex-col gap-3 rounded-lg bg-[#0072C6] text-[#caffff] text-center">
          {login ? (
            <>
              <p className={loginStyle.title}>WELCOME BACK!</p>
              <p>Welcome back! Please enter your details!</p>
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
              <input
                type="text"
                placeholder="Phone number"
                className={theme.inputs}
              />
            </>
          )}
          <input type="text" placeholder="Email" className={theme.inputs} />
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
    </div>
  );
};

export default Login;
