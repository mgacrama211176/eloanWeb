import React from "react";
import Navigation from "../../components/navigation/Navigation";
import heroImage from "../../assets/relieved.jpg";
import { theme } from "../../theme/theme";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section
        className={`flex flex-col justify-around items-center h-screen lg:flex-col w-screen`}
      >
        <div>
          <p className="text-4xl text-black font-bold text-center md:text-left md:text-6xl lg:text-8xl p-10">
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
          <button className={`${theme.submitBtn} ${theme.herobtnText}`}>
            Apply Now!
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
