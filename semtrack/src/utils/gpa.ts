import { Course } from "../store/slices/coursesSlice";
import { GPAState } from "../store/slices/gpaSlice";
import { Grade, GradeState } from "../store/slices/gradesSlice";
import { calculateAverageGrade } from "./grades";

/**
 * Calculates the combined GPA and grade in percentage of all the given courses
 *
 * @param {Course[]} courses An array of Course objects
 *
 * @returns {averageGPA: string, averageGradeInPercentage: string}
 * An object containing the combined GPA and grade in percentage
 */
export const calculateGPAFromCourses = (
  courses: Course[],
  gradeState: GradeState,
  GPAState: GPAState
) => {
  let sumOfGPA = 0;
  let sumOfWeight = 0;
  let sumOfGradesInPercentage = 0;

  for (const course of courses) {
    const grades: Grade[] = gradeState.data[course.id];
    const courseAverageGrade = calculateAverageGrade(grades);
    const courseGPA = calculateGPAFromGrade(courseAverageGrade, GPAState);

    sumOfGradesInPercentage += courseAverageGrade * course.weight;
    sumOfGPA += courseGPA * course.weight;
    sumOfWeight += course.weight;
  }

  const averageGPA = (sumOfGPA / sumOfWeight).toFixed(2);
  const averageGradeInPercentage = (
    sumOfGradesInPercentage / sumOfWeight
  ).toFixed(2);

  return { averageGPA, averageGradeInPercentage };
};

/**
 * Calculates the GPA of a given grade
 *
 * @param {number} grade The grade to calculate the GPA of
 *
 * @returns {number} The GPA in two decimal places of the given grade
 */
export const calculateGPAFromGrade = (
  grade: number,
  GPAState: GPAState
): number => {
  if (!GPAState.isOn) {
    return 0;
  }
  const activeScale = GPAState.templates[GPAState.activeTemplate].scale;
  for (const gradeRange of activeScale) {
    if (grade >= gradeRange.min && grade <= gradeRange.max) {
      return gradeRange.gpa;
    }
  }
  throw new Error(`No GPA found for grade ${grade}`);
};
