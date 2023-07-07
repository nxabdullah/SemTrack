import { Course } from "../store/slices/coursesSlice"
import { GPAState } from "../store/slices/gpaSlice";
import { Grade, GradeState } from "../store/slices/gradesSlice";
import { calculateAverageGrade } from "./grades";
// todo: refactor this entire file 
/**
 * Calculates the combined GPA of all the given courses
 * 
 * @param {Course[]} courses An array of Course objects
 * 
 * @returns {number} the combined GPA of the given courses
 */
export const calculateGPAFromCourses = (courses: Course[], gradeState: GradeState, GPAState: GPAState) => {

    let gpa = 0;
    let weight = 0;

    let gradePercentage = 0;

    for (let course of courses) {

        const grades: Grade[] = gradeState.data[course.id];

        let grade = calculateAverageGrade(grades);

        gradePercentage += grade;

        let courseGPA = calculateGPAFromGrade(grade, GPAState);

        // when weight is 2, add the gpa twice. 
        gpa += courseGPA;
        weight += 1;
    }

    gpa = gpa / weight;
    gradePercentage /= weight;

    return {gpa, gradePercentage };
}

// given grade, convert to gpa 
export const calculateGPAFromGrade = (grade: number, GPAState: GPAState): number => {

    if (!GPAState.isOn) {
      return 0;
    }
  
    const activeScale = GPAState.templates[GPAState.activeTemplate].scale;
    
    for (let gradeRange of activeScale) {
      if (grade >= gradeRange.min && grade <= gradeRange.max) {
        return gradeRange.gpa;
      }
    }
  
    throw new Error(`No GPA found for grade ${grade}`);
  }
  