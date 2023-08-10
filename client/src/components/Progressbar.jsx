import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const incrementProgress = () => {
    setProgress(prevProgress => {
      if (prevProgress >= 100) {
        return 100;
      }
      return prevProgress + 10;
    });
  };
  

  return (
    <div>
    <div style={{ width: `${progress}%`, height: "20px", background: "blue" }}>
      {progress}%
    </div>
    <button onClick={incrementProgress}>Increment Progress</button>
  </div>
    
  );
};

export default ProgressBar;