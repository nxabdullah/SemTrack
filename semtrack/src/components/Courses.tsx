import { useSelector } from "react-redux";
import AddCourseModal from "./AddCourseModal";

const generateRandomMark = () => {
  return Math.floor(Math.random() * 100);
};

// should i accept title and button instead?
function Courses() {
  const courses = useSelector((state) => state.courses.courses);

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
        <td>{generateRandomMark()}%</td>
        <th>
          <button className="btn btn-ghost btn-sm">view grades</button>
        </th>
      </tr>
    );
  });

  console.log(courses);

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
