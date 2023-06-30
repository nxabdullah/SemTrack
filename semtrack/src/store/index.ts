import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, removeCourse } from "./slices/coursesSlice";
import { gradesReducer, addGrade } from "./slices/gradesSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    grades: gradesReducer,
  },
});

export { store, addCourse, removeCourse, addGrade };
