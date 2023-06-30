import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

// shape of a course
type Tcourse = {
  id: string;
  name: string;
};

// shape of the course state
type TCourseState = {
  courses: Tcourse[];
};

// define initial state
const initialState: TCourseState = {
  courses: [
    {
      id: "1",
      name: "CSC108",
    },
  ],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<Tcourse>) {
      state.courses.push({
        id: nanoid(),
        name: action.payload.name,
      });
    },
    removeCourse(state, action: PayloadAction<string>) {
      // state.courses = state.courses.filter(
      //   (course) => course.id !== action.payload
      // );
      console.log("delete triggered");
    },
  },
});

export const { addCourse, removeCourse } = coursesSlice.actions;
export const courseReducer = coursesSlice.reducer;
