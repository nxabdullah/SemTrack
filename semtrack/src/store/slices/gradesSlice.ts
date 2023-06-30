import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

// shape of a grade
type TGrade = {
  id?: string;
  name: string;
  grade: number;
  weight: number;
  courseId: string;
};

const initialState: TGrade[] = [
  {
    id: nanoid(),
    name: "Test 1",
    grade: 90,
    weight: 20,
    courseId: "1",
  },
  {
    id: nanoid(),
    name: "Test 2",
    grade: 80,
    weight: 20,
    courseId: "1",
  },
  {
    id: nanoid(),
    name: "Test 3",
    grade: 70,
    weight: 20,
    courseId: "1",
  },
  {
    id: nanoid(),
    name: "Test 4",
    grade: 60,
    weight: 20,
    courseId: "1",
  },
];

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    addGrade(state, action: PayloadAction<TGrade>) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        grade: action.payload.grade,
        weight: action.payload.weight,
        courseId: action.payload.courseId,
      });
    },
  },
});

export const { addGrade } = gradesSlice.actions;
export const gradesReducer = gradesSlice.reducer;
