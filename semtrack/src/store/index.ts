import { configureStore } from "@reduxjs/toolkit";
import {
  courseReducer,
  addCourse,
  editCourse,
  deleteCourse,
  setSelectedCourse,
  CourseState,
} from "./slices/coursesSlice";
import {
  gradesReducer,
  addGrade,
  updateGrade,
  GradeState,
  setEdit,
  removeGrade,
} from "./slices/gradesSlice";
import { appReducer, setToast, resetToast, AppState } from "./slices/appSlice";
import { GPAState, gpaReducer } from "./slices/gpaSlice";

export interface RootState {
  app: AppState;
  courses: CourseState;
  grades: GradeState;
  gpa: GPAState;
}

const store = configureStore({
  reducer: {
    app: appReducer,
    courses: courseReducer,
    grades: gradesReducer,
    gpa: gpaReducer,
  },
});

export {
  store,
  addCourse,
  editCourse,
  deleteCourse,
  setSelectedCourse,
  addGrade,
  updateGrade,
  setEdit,
  removeGrade,
  setToast,
  resetToast,
};
