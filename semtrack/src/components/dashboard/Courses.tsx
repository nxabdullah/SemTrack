import { useSelector } from "react-redux";
import AddCourseModal from "./AddCourseModal";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { calculateAverageGrade } from "../../utils/grades";
import EmptyRow from "../shared/EmptyRow";

function Courses() {
  const courses = useSelector((state: RootState) => state.courses.courses);
  const grades = useSelector((state: RootState) => state.grades.data);

  const renderedCourses = () => {
    if (courses.length === 0) {
      return (
        <EmptyRow message="No courses found. Add a course and get started! 😁" />
      );
    }

    return courses.map((course) => {
      return (
        <tr key={course.id}>
          <td>
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold text-lg">
                  <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </div>
              </div>
            </div>
          </td>
          <td>{calculateAverageGrade(grades[course.id])}%</td>
          <td>{course.weight / 2}</td>
          <th>
            <Link to={`/courses/${course.id}`}>
              <button className="btn btn-ghost btn-sm">view </button>
            </Link>
          </th>
        </tr>
      );
    });
  };

  return (
    <>
      <h1 className="text-2xl font-semibold">
        Your Courses
        <button
          className="btn btn-primary float-right"
          onClick={() => window.addCourseModal.showModal()}
        >
          add course
        </button>
        <AddCourseModal />
      </h1>
      <div className="mt-4"></div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>cumulative grade</th>
              <th>weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderedCourses()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Courses;
