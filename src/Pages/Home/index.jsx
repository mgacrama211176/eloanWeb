import React from "react";
import Navigation from "../../components/navigation/Navigation";
import heroImage from "../../assets/relieved.jpg";
import { theme } from "../../theme/theme";

const Home = () => {
  return (
    <div>
      <Navigation />

      {/* HERO */}
      <section
        className={`flex flex-row justify-around items-center h-screen `}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="text-6xl text-white font-bold w-[500px]">
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
