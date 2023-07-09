import { useDispatch } from "react-redux";
import { addCourse } from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";

function AddCourseModal() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      courseName: "",
      courseWeight: 1,
    },
    onSubmit: (values, { resetForm }) => {
      if (values.courseName !== "") {
        dispatch(
          addCourse({
            id: nanoid(),
            name: values.courseName,
            weight: values.courseWeight,
          })
        );
        resetForm();
        closeModal();
      }
    },
  });

  const closeModal = () => {
    window.addCourseModal.close();
  };

  return (
    <>
      <dialog id="addCourseModal" className="modal">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="font-bold text-lg">ADD COURSE</h3>

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
              add
            </button>
          </div>
        </form>
      </dialog>

      <button
        className="btn btn-primary float-right"
        onClick={() => window.addCourseModal.showModal()}
      >
        add course
      </button>
    </>
  );
}

export default AddCourseModal;
