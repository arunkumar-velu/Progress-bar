const ProgressBar = ({ progress }) => {
  const p = progress ? progress : 0;
  return (
    <div>
      <h1>Progress bar</h1>
      <div className="pb-container">
        <div
          className="pb-progress"
          style={{ transform: `translateX(${p - 100}%)` }}
          role="ProgressBar"
          aria-valuenow={p}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {p}%
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
