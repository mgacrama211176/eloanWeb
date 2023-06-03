import React from "react";
import Navigation from "../../components/navigation/Navigation";
import heroImage from "../../assets/relieved.jpg";
import { theme } from "../../theme/theme";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section
        className={`flex flex-col justify-around items-center h-screen lg:flex-row`}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="text-4xl text-white font-bold md:w-[500px] w-50 text-center md:text-left md:text-6xl">
            "Unlock Financial Peace of Mind: Emergency Loans when You Need Them
            Most"
          </p>
        </div>
        <div>
          <button className={`${theme.submitBtn} ${theme.herobtnText}`}>
            Apply Now!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
