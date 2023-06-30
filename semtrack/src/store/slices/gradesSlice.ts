import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Grade {
  id: string;
  name: string;
  grade: number;
  weight: number;
  courseId: string;
  isEdit: boolean;
}

// index grades by course id
export type GradesByCourseId = {
  [courseId: string]: Grade[];
};

export type GradeState = {
  data: GradesByCourseId;
};

const initialState: GradeState = {
  data: {
    "1": [
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
    ],
    "2": [
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
  },
};

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    addGrade(state: GradeState, action: PayloadAction<Grade>) {
      const { courseId } = action.payload;
      state.data[courseId].push({
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
