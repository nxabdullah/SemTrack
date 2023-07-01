import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GradeRow from "./GradeRow";

interface GradesProps {
  courseId: string
}

const Grades: React.FC<GradesProps> = ({ courseId }) => {
  const grades = useSelector((state: RootState) => {
    return state.grades.data[courseId];
  });

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade (%)</th>
              <th>Weight (%)</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (<GradeRow grade={grade} key={grade.id} />))}</tbody>
        </table>
      </div>
    </>
  );
}

export default Grades;
