import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { calculateGPAFromCourses } from "../../utils/gpa";


const SemesterStats: React.FC = () => {
  const {gpa, gradePercentage} = useSelector((state: RootState) => 
    {
      return calculateGPAFromCourses(state.courses.courses, state.grades, state.gpa) 
    });

  return (
    <div>
      <div className="stats shadow">
        <div className="stat pb-5">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title text-sm font-semibold">Semester GPA</div>
          <div className="stat-value">{gpa} / 4.0</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title text-sm font-semibold">Average Grade (%)</div>
          <div className="stat-value">{gradePercentage} / 100</div>
        </div>
      </div>
    </div>
  );
};

export default SemesterStats;
