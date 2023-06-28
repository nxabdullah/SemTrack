import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../store/";

// button is coupled rn @todo - use it as a prop
function AddCourseModal() {
  const [inputCourseName, setInputCourseName] = useState("");
  const dispatch = useDispatch();

  const handleAddCourse = () => {
    dispatch(
      addCourse({
        name: inputCourseName,
      })
    );
    setInputCourseName("");
    closeModal();
  };

  const closeModal = () => {
    window.addCourseModal.close();
  };

  return (
    <>
      <dialog id="addCourseModal" className="modal">
        <form method="dialog" className="modal-box" onSubmit={handleAddCourse}>
          <h3 className="font-bold text-lg">ADD COURSE</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <span className="label-text">enter course name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs input-primary"
              value={inputCourseName}
              onSubmit={handleAddCourse}
              onChange={(event) => setInputCourseName(event.target.value)}
            />
          </div>
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              close
            </button>
            <button className="btn btn-primary">add</button>
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
