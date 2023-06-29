import React from "react";
import Profile from "../../../components/Profile";
import GenInfo from "../../../components/GenInfo";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Profile />
      <div className="w-full flex flex-col">
        <GenInfo />
      </div>
    </div>
  );
};

export default Dashboard;
