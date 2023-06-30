import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, CourseState } from "./slices/coursesSlice";
import {
  gradesReducer,
  addGrade,
  updateGrade,
  GradeState,
} from "./slices/gradesSlice";

export interface RootState {
  courses: CourseState;
  grades: GradeState;
}

const store = configureStore({
  reducer: {
    courses: courseReducer,
    grades: gradesReducer,
  },
});

export { store, addCourse, addGrade, updateGrade };