import { createSlice } from "@reduxjs/toolkit";

export interface GradeRange {
    min: number;
    max: number;
    gpa: number;
}

export interface GPATemplate {
    scale: GradeRange[];
}

export type GPATemplatesByName = {
    [name: string]: GPATemplate;
};
  

export type GPAState = {
    activeTemplate: string,
    templates: GPATemplatesByName,
    isOn: boolean
};

const initialState: GPAState = {
  activeTemplate: "uoft",
  templates: {
    "uoft": {
        scale: [
            {min: 90, max: 100, gpa: 4.0},
            {min: 85, max: 89, gpa: 4.0},
            {min: 80, max: 84, gpa: 3.7},
            {min: 77, max: 79, gpa: 3.3},
            {min: 73, max: 76, gpa: 3.0},
            {min: 70, max: 72, gpa: 2.7},
            {min: 67, max: 69, gpa: 2.3},
            {min: 63, max: 66, gpa: 2.0},
            {min: 60, max: 62, gpa: 1.7},
            {min: 57, max: 59, gpa: 1.3},
            {min: 53, max: 56, gpa: 1.0},
            {min: 50, max: 52, gpa: 0.7},
            {min: 0, max: 49, gpa: 0.0},
            {min: 0, max: 49, gpa: 0.0},
        ]
    }
  },
  isOn: true
};

const gpaSlice = createSlice({
  name: "gpa",
  initialState,
  reducers: {},
});

export const gpaReducer = gpaSlice.reducer;
