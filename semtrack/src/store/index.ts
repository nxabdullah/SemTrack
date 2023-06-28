import { configureStore } from "@reduxjs/toolkit";
import { courseReducer, addCourse, removeCourse } from "./slices/coursesSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

export { store, addCourse, removeCourse };
