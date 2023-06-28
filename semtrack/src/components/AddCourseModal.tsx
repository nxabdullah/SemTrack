// button is coupled rn @todo - use it as a prop
function AddCourseModal() {
  return (
    <>
      <dialog id="addCourseModal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">ADD COURSE</h3>
          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <span className="label-text">enter course name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs input-primary"
            />
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">close</button>
            <button className="btn btn-primary">add</button>
          </div>
        </form>
      </dialog>

      {/* <button className="btn" onClick={() => window.addCourseModal.showModal()}>
        open modal
      </button> */}
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
