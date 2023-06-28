import AddCourseModal from "./AddCourseModal";

// should i accept title and button instead?
function Courses() {
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
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  {" "}
                  <div>
                    <div className="font-bold text-lg">CSC301</div>
                  </div>
                </div>
              </td>
              <td>75%</td>
              <th>
                <button className="btn btn-ghost btn-sm">view grades</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  {" "}
                  <div>
                    <div className="font-bold text-lg">STA246</div>
                  </div>
                </div>
              </td>
              <td>85%</td>
              <th>
                <button className="btn btn-ghost btn-sm">view grades</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  {" "}
                  <div>
                    <div className="font-bold text-lg">MAT224</div>
                  </div>
                </div>
              </td>
              <td>57%</td>
              <th>
                <button className="btn btn-ghost btn-sm">view grades</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Courses;
