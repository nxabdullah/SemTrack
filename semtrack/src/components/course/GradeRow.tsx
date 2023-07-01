import { useState } from "react"
import { Grade } from "../../store/slices/gradesSlice"
import classNames from 'classnames';
import { useDispatch } from "react-redux";
import { updateGrade, setEdit } from "../../store/";

interface GradeProps {
    grade: Grade
}

/*
 * local state is being used so that I can dispatch all the changes
 * to global state when user presses save
 * 
 * Is this a redundant to duplicate this state? I could dispatch directly
 * if we were updating the state onChange, but we want to do it when
 * the save button is pressed.  
 * 
 * */
const GradeRow: React.FC<GradeProps> = ({ grade }) => {
    const [localName, setLocalName] = useState(grade.name)
    const [localGrade, setLocalGrade] = useState(grade.grade)
    const [localWeight, setLocalWeight] = useState(grade.weight)

    const dispatch = useDispatch();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalName(e.target.value)
    }

    const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalGrade(parseInt(e.target.value))
    }

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalWeight(parseInt(e.target.value))
    }

    const handleSave = (grade: Grade) => {
        const action = updateGrade({
            ...grade, 
            "name": localName,
            "grade": localGrade,
            "weight": localWeight,
            "isEdit": false,

        })
        dispatch(action)
    }

    const handleEdit = (grade: Grade) => {
        const action = setEdit(grade)
        dispatch(action)
    }

    return (
        <tr key={grade.id}>
          <th>
            <input
              type="text"
              value={localName}
              className={classNames("input", {
                "input-bordered": grade.isEdit
              })}
              onChange={(e) => handleNameChange(e)}
              disabled={!grade.isEdit}
            />
          </th>
          <th>
            <div className="flex items-center space-x-3">
              <div>
                <input
                  type="number"
                  value={localGrade}
                  className={classNames("input", "w-20", {"input-bordered": grade.isEdit})} 
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
              value={localWeight}
              className={classNames("input", "w-20", {"input-bordered": grade.isEdit})} 
              onChange={(e) => handleWeightChange(e)}
              disabled={!grade.isEdit}
            />
          </th>
          <th>
            {" "}
            {grade.isEdit ? (
                <button 
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleSave(grade)}
                >
                    save
                </button>
            ) : (
                <button 
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleEdit(grade)}
                >
                    edit
                </button>
            )}
          </th>
          <th>
            <button className="btn btn-ghost btn-xs">remove</button>
          </th>
        </tr>        
    )
}

export default GradeRow;