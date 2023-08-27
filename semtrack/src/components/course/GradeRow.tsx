import { Grade } from "../../store/slices/gradesSlice"
import classNames from 'classnames';
import { useDispatch } from "react-redux";
import { updateGrade, removeGrade } from "../../store/";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GradeProps {
    grade: Grade
}

/*
 * This component renders an individual table row for the grades table 
 * in a particular course. Additionally, handles user interaction with
 * the row.
 * */
const GradeRow: React.FC<GradeProps> = ({ grade }) => {
    const dispatch = useDispatch();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateGrade({
          ...grade,
          'name': e.target.value
        }))
    }

    const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateGrade({
          ...grade,
          'grade': parseInt(e.target.value)
        }))
    }

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateGrade({
        ...grade,
        'weight': parseInt(e.target.value)
      }))   
    }

    const handleRemove = (grade: Grade) => {
        const action = removeGrade(grade)
        dispatch(action)
    }

    return (
        <tr>
          <th>
            <input
              type="text"
              value={grade.name}
              className={classNames("input", "border-2", {
                "input-bordered": grade.isEdit
              })}
              onChange={(e) => handleNameChange(e)}
              disabled={!grade.isEdit}
              placeholder="Assignment"
            />
          </th>
          <th>
            <div className="flex items-center space-x-3">
              <div>
                <input
                  type="number"
                  value={grade.grade}
                  className={classNames("input",  "border-2", "w-20", {"input-bordered": grade.isEdit})} 
                  onChange={(e) => handleGradeChange(e)}
                  disabled={!grade.isEdit}
                />
              </div>
            </div>
          </th>
          <th>
            {" "}
            <input
              type="number"
              value={grade.weight}
              className={classNames("input", "border-2", "w-20", {"input-bordered": grade.isEdit})} 
              onChange={(e) => handleWeightChange(e)}
              disabled={!grade.isEdit}
            />
          </th>
          <th>
            <button 
                className="btn btn-ghost btn-xs"
                onClick={() => handleRemove(grade)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
          </th>
        </tr>        
    )
}

export default GradeRow;