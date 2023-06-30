import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Course {
  id: string;
  name: string;
}

export type CourseState = {
  courses: Course[];
};

const initialState: CourseState = {
  courses: [
    {
      id: "1",
      name: "CSC148",
    },
    {
      id: "2",
      name: "MAT102",
    },
  ],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<Course>) {
      state.courses.push({
        id: nanoid(),
        name: action.payload.name,
      });
    },
  },
});

export const { addCourse } = coursesSlice.actions;
export const courseReducer = coursesSlice.reducer;
