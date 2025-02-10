import React from "react";

export interface NeonCircleProps {
  value: number;
}

export const NeonCircle: React.FC<NeonCircleProps> = ({ value }) => {
  return (
    <div className="circle-glow">
      <div className="circle">
        <span className="number">{value}</span>
      </div>
    </div>
  );
};

const styles = `
  .circle-glow {
    width: 50px;
    height: 50px;
    margin-left: 40px;
    border-radius: 25px;
    position: absolute;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    z-index: -10;
  }
  .circle {
    width: 40px;
    height: 40px;
    margin-top: 3px;
    border-radius: 20px;
    background-color: #802EFF;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 15px #802EFF;
  }
  .number {
    color: white;
    font-size: 16px;
    z-index: 10;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
