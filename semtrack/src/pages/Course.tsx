import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grades from "../components/course/Grades";
import Stats from "../components/course/Stats";
import { RootState, addGrade } from "../store";
import { Course as CourseType } from "../store/slices/coursesSlice";

function Course() {
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const course: CourseType | undefined = useSelector(
    (state: RootState): CourseType | undefined => {
      return state.courses.courses.find(
        (course: CourseType) => course.id === courseId
      );
    }
  );

  if (!course) {
    return <h1 className="text-3xl">Course not found</h1>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">{course.name}</h1>

      <div className="mt-8"></div>

      <Stats />

      <div className="mt-4"></div>

      <h1 className="text-xl font-bold mt-8">
        your grades
        <button
          className="btn btn-primary float-right btn-sm"
          // onClick={() => dispatch(addGrade({ course.id! }))}
        >
          add grade
        </button>
      </h1>
      <div className="mt-2"></div>
      <Grades courseId={courseId} />
    </>
  );
}

export default Course;
