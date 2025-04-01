import "./StepBar.css";

const StepBar = ({ children }) => {
  return (
    <div className="step-bar">
      <span className="step-bar-text">{children}</span>
    </div>
  );
};

export default StepBar;
