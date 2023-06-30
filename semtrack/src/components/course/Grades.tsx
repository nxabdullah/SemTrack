import { useSelector } from "react-redux";

function Grades({ courseId }) {
  const grades = useSelector((state) => {
    console.log(state);
    return state.grades.filter((grade) => {
      return grade.courseId === courseId;
    });
  });

  const renderedGrades = () => {
    return grades.map((grade) => {
      return (
        <tr key={grade.id}>
          <th>
            <input type="text" value={grade.name} className="input disabled" />
          </th>
          <th>
            <div className="flex items-center space-x-3">
              <div>
                <input
                  type="number"
                  value={grade.grade}
                  className="input disabled w-20"
                />
              </div>
            </div>
          </th>
          <th>
            {" "}
            <input
              type="number"
              value={grade.weight}
              className="input disabled w-20"
            />
          </th>
          <th>
            {" "}
            <button className="btn btn-ghost btn-xs">edit</button>
          </th>
          <th>
            <button className="btn btn-ghost btn-xs">remove</button>
          </th>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade (%)</th>
              <th>Weight (%)</th>
            </tr>
          </thead>
          <tbody>{renderedGrades()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Grades;
