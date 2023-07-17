import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
  id: string;
  name: string;
  weight: number;
}

export type CourseState = {
  courses: Course[];
  selectedCourse: Course | undefined; // for managing
};

const initialState: CourseState = {
  courses: [
    {
      id: "1",
      name: "CSC148",
      weight: 1,
    },
    {
      id: "2",
      name: "MAT102",
      weight: 1,
    },
  ],
  selectedCourse: undefined,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<Course>) {
      state.courses.push(action.payload);
    },
    setSelectedCourse(state, action: PayloadAction<Course | undefined>) {
      state.selectedCourse = action.payload;
    },
    editCourse(state, action: PayloadAction<Course>) {
      const { id, name, weight } = action.payload;
      const course = state.courses.find((course) => course.id === id);
      if (course) {
        course.name = name;
        course.weight = weight;
      }
    },
    deleteCourse(state, action: PayloadAction<Course>) {
      const { id } = action.payload;
      const courseIndex = state.courses.findIndex((course) => course.id === id);
      if (courseIndex !== -1) {
        state.courses.splice(courseIndex, 1);
      }
    },
  },
});

export const { addCourse, editCourse, deleteCourse, setSelectedCourse } =
  coursesSlice.actions;
export const courseReducer = coursesSlice.reducer;
