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
import {
  toastsReducer,
  ToastsState,
  addToast,
  deleteToast,
} from "./slices/toastsSlice";
import { GPAState, gpaReducer } from "./slices/gpaSlice";

export interface RootState {
  toasts: ToastsState;
  courses: CourseState;
  grades: GradeState;
  gpa: GPAState;
}

const store = configureStore({
  reducer: {
    toasts: toastsReducer,
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
  addToast,
  deleteToast,
};
