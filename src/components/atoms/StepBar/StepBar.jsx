import "./StepBar.css";

const StepBar = ({ className, children }) => {
  return (
    <div className={`step-bar ${className}`}>
      <span className="step-bar-text">{children}</span>
    </div>
  );
};

export default StepBar;
