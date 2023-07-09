import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
  id: string;
  name: string;
  weight: number;
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
      state.courses.push(action.payload);
    },
  },
});

export const { addCourse } = coursesSlice.actions;
export const courseReducer = coursesSlice.reducer;
