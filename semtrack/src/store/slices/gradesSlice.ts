import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Grade {
  id: string;
  name: string;
  grade: number;
  weight: number;
  courseId: string;
  isEdit: boolean;
}

export type GradeState = {
  data: Grade[];
};

const initialState: GradeState = {
  data: [
    {
      id: nanoid(),
      name: "Assignment 1",
      grade: 96,
      weight: 20,
      courseId: "1",
      isEdit: false,
    },
    {
      id: nanoid(),
      name: "Midterm",
      grade: 84,
      weight: 25,
      courseId: "1",
      isEdit: false,
    },
    {
      id: nanoid(),
      name: "Quiz 1",
      grade: 70,
      weight: 9,
      courseId: "2",
      isEdit: false,
    },
    {
      id: nanoid(),
      name: "Problem Set 1",
      grade: 90,
      weight: 5,
      courseId: "2",
      isEdit: true,
    },
  ],
};

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    addGrade(state: GradeState, action: PayloadAction<Grade>) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        grade: action.payload.grade,
        weight: action.payload.weight,
        courseId: action.payload.courseId,
        isEdit: false,
      });
    },
    updateGrade(state: GradeState, action: PayloadAction<Grade>) {
      console.log(action);
    },
  },
});

export const { addGrade, updateGrade } = gradesSlice.actions;
export const gradesReducer = gradesSlice.reducer;
