import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grades from "../components/course/Grades";
import Stats from "../components/course/Stats";
import { RootState, resetToast } from "../store";
import { Course as CourseType } from "../store/slices/coursesSlice";
import { addGrade, setSelectedCourse, deleteCourse, setToast } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import EditCourseModal from "../components/course/EditCourseModal";

function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const course: CourseType | undefined = useSelector(
    (state: RootState): CourseType | undefined => {
      return state.courses.courses.find(
        (course: CourseType) => course.id === courseId
      );
    }
  );

  const grades = useSelector((state: RootState) => {
    return state.grades.data[courseId!];
  });

  if (!course) {
    return <h1 className="text-3xl">Course not found</h1>;
  }

  // todo: prevent user from adding grades if they already clicked it
  const handleAddGrade = () => {
    const action = addGrade({
      courseId: course.id,
      name: "",
      grade: 0,
      weight: 0,
    });
    dispatch(action);
  };

  const handleManageCourse = () => {
    dispatch(setSelectedCourse(course));
    window.editCourseModal.showModal();
  };

  const handleDeleteCourse = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch(
        setToast({
          show: true,
          message: course.name + " was successfully deleted.",
          type: "success",
        })
      );
      dispatch(deleteCourse(course));
      navigate("/");
      setTimeout(() => {
        dispatch(resetToast());
      }, 4000);
    }
  };

  return (
    <>
      <EditCourseModal course={course} />
      <h1 className="text-3xl font-bold">
        {course.name}
        <button
          className="btn btn-sm float-right ms-2"
          onClick={handleDeleteCourse}
        >
          <FontAwesomeIcon icon={faTrash} />{" "}
        </button>
        <button className="btn btn-sm float-right" onClick={handleManageCourse}>
          <FontAwesomeIcon icon={faCog} />{" "}
        </button>
      </h1>

      <div className="mt-8"></div>

      <Stats grades={grades} />

      <div className="mt-4"></div>

      <h1 className="text-xl font-bold mt-8">
        your grades
        <button
          className="btn btn-primary float-right btn-sm"
          onClick={handleAddGrade}
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
