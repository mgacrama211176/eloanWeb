import React from "react";
import { theme } from "../../theme/theme";
import { homeStyle } from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className={homeStyle.container}>
        <div>
          <p className={homeStyle.textContainer}>
            <motion.div
              initial={{ opacity: 0, x: 600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
            >
              "Unlock Financial Peace of Mind:
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              options={{ loop: Infinity }}
            >
              <span className="z-0 relative">
                Emergency Loans when You Need Them Most"
              </span>
            </motion.div>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [200, -50, 0] }}
          transition={{ duration: 1 }}
        >
          <Link to={{ pathname: "login", state: true }}>
            <button className={`${theme.submitBtn} ${theme.herobtnText}`}>
              Apply Now!
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
