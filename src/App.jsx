import React from "react";
import { theme } from "./theme/theme";
import Navigation from "./components/navigation/Navigation";
const App = () => {
  return (
    <div style={theme.center}>
      <Navigation />
    </div>
  );
};

export default App;
