import { currGrade, minGrade, maxGrade } from "../../utils/grades";

function Stats() {
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title text-sm font-semibold">Grade</div>
          <div className="stat-value">{currGrade()} / 100</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-sm font-semibold">Min Grade</div>
          <div className="stat-value">{minGrade()} / 100</div>
          <div className="stat-desc">Learn more</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-sm font-semibold">Max Grade</div>
          <div className="stat-value">{maxGrade()} / 100</div>
          <div className="stat-desc">Learn more</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
