import { useSelector } from "react-redux";
import AddCourseModal from "./AddCourseModal";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { calculateAverageGrade } from "../../utils/grades";

// should i accept title and button instead?
function Courses() {
  const courses = useSelector((state: RootState) => state.courses.courses);
  const grades = useSelector((state: RootState) => state.grades.data);

  const renderedCourses = courses.map((course) => {
    return (
      <tr key={course.id}>
        <td>
          <div className="flex items-center space-x-3">
            {" "}
            <div>
              <div className="font-bold text-lg">{course.name}</div>
            </div>
          </div>
        </td>
        <td>{calculateAverageGrade(grades[course.id])}%</td>
        <th>
          <Link to={`/courses/${course.id}`}>
            <button className="btn btn-ghost btn-sm">view grades</button>
          </Link>
        </th>
      </tr>
    );
  });

  return (
    <>
      {/* <AddCourseModal
        button={
          <button className="btn btn-primary float-right">add course</button>
        }
      /> */}
      <h1 className="text-2xl font-semibold">
        your courses{" "}
        {/* <button className="btn btn-primary float-right">add course</button> */}
        <AddCourseModal />
      </h1>
      <div className="mt-4"></div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>cumulative grade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderedCourses}</tbody>
        </table>
      </div>
    </>
  );
}

export default Courses;
