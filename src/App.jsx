import { useState } from "react";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
