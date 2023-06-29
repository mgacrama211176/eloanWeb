import React from "react";
import { theme } from "../../theme/theme";

const GenInfo = () => {
  const paper = `m-2 p-2 border rounded-2xl bg-blue-400 cursor-pointer hover:bg-red-400 shadow-lg flex flex-col text-center`;
  const Headers = [
    {
      title: "Active Clients",
    },
    {
      title: "Due Clients",
    },
    {
      title: "Blocked Clients",
    },
    {
      title: "Remaining Slots",
    },
  ];
  return (
    <div className={`flex flex-row m-2 border justify-center`}>
      {Headers.map((header) => (
        <div className={paper} key={header.title}>
          <h1>{header.title}</h1>
          <h1>123</h1>
        </div>
      ))}
    </div>
  );
};

export default GenInfo;
