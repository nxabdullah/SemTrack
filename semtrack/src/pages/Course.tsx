import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grades from "../components/course/Grades";
import Stats from "../components/course/Stats";

function Course() {
  const { courseId } = useParams();

  const course = useSelector((state) => {
    return state.courses.courses.find((course) => course.id === courseId);
  });

  return (
    <>
      <h1 className="text-3xl font-bold">{course.name}</h1>

      <div className="mt-8"></div>

      <Stats />

      <div className="mt-4"></div>

      <h1 className="text-xl font-bold mt-8">
        your grades
        <button className="btn btn-primary float-right btn-sm ">
          add grade
        </button>
      </h1>
      <div className="mt-2"></div>
      <Grades courseId={course.id} />
    </>
  );
}

export default Course;
