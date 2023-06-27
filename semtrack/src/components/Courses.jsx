import React from "react";

function Courses() {
  return (
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
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
