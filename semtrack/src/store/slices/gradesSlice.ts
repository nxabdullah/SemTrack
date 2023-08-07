import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { addCourse } from "..";
import { Course } from "./coursesSlice";

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
  data: {},
};

const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    addGrade(
      state: GradeState,
      action: PayloadAction<{
        name: string;
        grade: number;
        weight: number;
        courseId: string;
      }>
    ) {
      const { courseId } = action.payload;
      state.data[courseId].push({
        id: nanoid(),
        name: action.payload.name,
        grade: action.payload.grade,
        weight: action.payload.weight,
        courseId: action.payload.courseId,
        isEdit: true,
      });
    },
    updateGrade(state: GradeState, action: PayloadAction<Grade>) {
      const { courseId, id } = action.payload;

      const gradeIndex = state.data[courseId].findIndex(
        (grade) => grade.id === id
      );

      if (gradeIndex >= 0) {
        state.data[courseId][gradeIndex] = action.payload;
      }
    },
    setEdit(state: GradeState, action: PayloadAction<Grade>) {
      const { courseId, id } = action.payload;

      const gradeIndex = state.data[courseId].findIndex(
        (grade) => grade.id === id
      );

      if (gradeIndex >= 0) {
        state.data[courseId][gradeIndex].isEdit = true;
      }
    },
    removeGrade(state: GradeState, action: PayloadAction<Grade>) {
      const { courseId, id } = action.payload;

      const gradeIndex = state.data[courseId].findIndex(
        (grade) => grade.id === id
      );

      if (gradeIndex >= 0) {
        state.data[courseId].splice(gradeIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action: PayloadAction<Course>) => {
      state.data[action.payload.id] = [];
    });
  },
});

export const { addGrade, updateGrade, setEdit, removeGrade } =
  gradesSlice.actions;
export const gradesReducer = gradesSlice.reducer;
