import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, CourseState } from "./slices/coursesSlice";
import {
  gradesReducer,
  addGrade,
  updateGrade,
  GradeState,
  setEdit,
  removeGrade
} from "./slices/gradesSlice";
import { GPAState, gpaReducer } from "./slices/gpaSlice";

export interface RootState {
  courses: CourseState;
  grades: GradeState;
  gpa: GPAState;
}

const store = configureStore({
  reducer: {
    courses: courseReducer,
    grades: gradesReducer,
    gpa: gpaReducer,
  },
});

export { store, addCourse, addGrade, updateGrade, setEdit, removeGrade };
