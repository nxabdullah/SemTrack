import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Course() {
  const { courseId } = useParams();

  const course = useSelector((state) => {
    return state.courses.courses.find((course) => course.id === courseId);
  });
  return <div>{course.name}</div>;
}

export default Course;
