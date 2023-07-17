import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  addCourse,
  editCourse,
  setSelectedCourse,
} from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { Course } from "../../store/slices/coursesSlice";

const AddCourseModal: React.FC = () => {
  const dispatch = useDispatch();
  const course = useSelector(
    (state: RootState) => state.courses.selectedCourse
  );

  interface formValues {
    courseName: string;
    courseWeight: number;
  }

  const formik = useFormik<formValues>({
    initialValues: {
      courseName: course ? course.name : "",
      courseWeight: course ? course.weight : 1,
    },
    onSubmit: (values, { resetForm }) => {
      if (course === undefined) {
        // add course
        if (values.courseName !== "") {
          dispatch(
            addCourse({
              id: nanoid(),
              name: values.courseName,
              weight: Number(values.courseWeight),
            })
          );
          resetForm();
          closeModal();
        }
      } else {
        // edit course
        const editedCourse: Course = {
          ...course,
          name: values.courseName,
          weight: Number(values.courseWeight),
        };
        dispatch(editCourse(editedCourse));
        closeModal();
      }
    },
    enableReinitialize: true,
  });

  const closeModal = () => {
    window.addCourseModal.close();
    dispatch(setSelectedCourse(undefined));
  };

  return (
    <>
      <dialog id="addCourseModal" className="modal">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="font-bold text-lg">
            {course ? "EDIT" : "ADD"} COURSE
          </h3>

          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <span className="label-text">Course name</span>
            </label>
            <input
              type="text"
              placeholder="CSC108H1"
              className="input input-bordered w-full max-w-xs"
              id="courseName"
              name="courseName"
              onChange={formik.handleChange}
              value={formik.values.courseName}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <span className="label-text">Course weight</span>
            </label>
            <select
              className="select select-bordered"
              id="courseWeight"
              name="courseWeight"
              onChange={formik.handleChange}
              value={formik.values.courseWeight}
            >
              <option value={1}>0.5</option>
              <option value={2}>1.0</option>
            </select>
          </div>

          <div className="modal-action">
            <button className="btn" type="button" onClick={closeModal}>
              close
            </button>
            <button className="btn btn-primary" type="submit">
              {course ? "SAVE" : "ADD"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddCourseModal;
