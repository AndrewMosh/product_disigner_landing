import "./gap.scss";
const Gap = ({ props }) => {
  return (
    <div className="gap">
      <div className="gap__element">{props}</div>
    </div>
  );
};

export default Gap;
