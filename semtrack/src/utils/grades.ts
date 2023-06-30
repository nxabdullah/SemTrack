import { Grade } from "../store/slices/gradesSlice";

/*
 * Note: weight is stored as a percentage, so it
 * must be divided by 100.
 */

export const currWeight = () => 0;

/*
 * Returns the current grade in the course.
 * @param {Grade[]} grades - The grades in the course.
 * @returns {number} The current grade in the course.
 */
export const currGrade = (grades: Grade[]): number => {
  let totalWeight = 0;
  let totalGrade = 0;
  for (let i = 0; i < grades.length; i++) {
    totalWeight += grades[i].weight;
    totalGrade += grades[i].grade * (grades[i].weight / 100);
  }
  return parseFloat((totalGrade / (totalWeight / 100)).toFixed(0));
};

export const minGrade = () => 0;
export const maxGrade = () => 0;
