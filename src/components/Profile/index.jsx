import React from "react";

const Profile = () => {
  const textColor = "text-[#091E35]";
  return (
    <div className="h-screen p-5 sm:w-96 flex flex-col items-center border-2 shadow-sm">
      <div className="flex items-center flex-col flex-wrap relative">
        <h1 className={textColor}>My Profile</h1>
        <h1 className={textColor}>MANAGER/INVESTOR/COLLECTOR</h1>
        <div className="p-2">
          <img
            src={`https://picsum.photos/seed/${Math.random()}/500`}
            alt="profile image"
            className="rounded-full w-52"
          />
        </div>
        <h1 className={textColor}>Marlon Gacrama JR</h1>
      </div>
      <h1>Address: Cebu City</h1>
      <h1>Mobile Number: 0939-681-0206</h1>
    </div>
  );
};

// https://picsum.photos/seed/${Math.random()}/500

export default Profile;
