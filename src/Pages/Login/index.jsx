import React, { useState } from "react";
import { theme } from "../../theme/theme";
import { loginStyle } from "./styles";

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className={loginStyle.allCenter}>
      <div>
        <div className="p-5 border m-2 flex flex-col gap-3 rounded-lg bg-[#0072C6] text-[#caffff]">
          <p className={loginStyle.title}>{login ? "LOGIN" : "REGISTER"}</p>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
