import React from "react";
import { theme } from "./theme/theme";
import Navigation from "./components/navigation/Navigation";
import Home from "./Pages/Home";
const App = () => {
  return (
    <div className={theme.general}>
      <Home />
    </div>
  );
};

export default App;
