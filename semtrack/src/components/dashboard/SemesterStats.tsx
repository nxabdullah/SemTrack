import { Course } from "../../store/slices/coursesSlice";


const SemesterStats: React.FC = () => {
  return (
    <div>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title text-sm font-semibold">Semester GPA</div>
          <div className="stat-value">{0} / 4.0</div>
        </div>
      </div>
    </div>
  );
};

export default SemesterStats;
