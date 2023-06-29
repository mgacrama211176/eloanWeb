import React, { useEffect } from "react";
import { theme } from "../../theme/theme";
import { homeStyle } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = ({ setUser }) => {
  const nav = useNavigate();

  useEffect(() => {
    setUser(false);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className={homeStyle.container}>
        <div>
          <div className={homeStyle.textContainer}>
            <motion.p
              initial={{ opacity: 0, x: 600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              "Unlock{" "}
              <span className={`${theme.secondaryColorText} underline`}>
                Financial Peace of Mind
              </span>{" "}
              :
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              options={{ loop: Infinity }}
            >
              <span className="z-0 relative">
                <span className={`${theme.secondaryColorText} underline`}>
                  Emergency Loans{" "}
                </span>
                when You Need Them Most"
              </span>
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [200, -50, 0] }}
          transition={{ duration: 1 }}
        >
          <button
            className={`${theme.submitBtn} ${theme.herobtnText}`}
            onClick={() => nav("login", { state: true })}
          >
            Apply Now!
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
