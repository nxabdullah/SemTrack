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
    addGrade(state: GradeState, action: PayloadAction<{
      name: string,
      grade: number,
      weight: number,
      courseId: string,
    }>) {
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

      const gradeIndex = state.data[courseId].findIndex((grade) => grade.id === id);

      if (gradeIndex >= 0) {
        state.data[courseId][gradeIndex] = action.payload;
      }
    },
    setEdit(state: GradeState, action: PayloadAction<Grade>) {
      const { courseId, id } = action.payload;

      const gradeIndex = state.data[courseId].findIndex((grade) => grade.id === id);
    
      if (gradeIndex >= 0) {
        state.data[courseId][gradeIndex].isEdit = true;
      }
    },
    removeGrade(state: GradeState, action: PayloadAction<Grade>) {
      const { courseId, id } = action.payload;

      const gradeIndex = state.data[courseId].findIndex((grade) => grade.id === id);
    
      if (gradeIndex >= 0) {
        state.data[courseId].splice(gradeIndex, 1)
      }
    }
  },
});

export const { addGrade, updateGrade, setEdit, removeGrade } = gradesSlice.actions;
export const gradesReducer = gradesSlice.reducer;
