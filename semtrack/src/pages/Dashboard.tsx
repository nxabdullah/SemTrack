import Courses from "../components/dashboard/Courses";
import SemesterStats from "../components/dashboard/SemesterStats";

function Dashboard() {
  return (
    <>
      {/* <h1 className="text-2xl font-semibold">progress</h1>
      <div className="mt-4"></div>
      TBD - show current cgpa, goals, and (maybe) a graph of your cgpa overtime.
      <div className="mt-4"></div> */}
      {/* <h1 className="text-2xl font-semibold">reminders</h1>
      <div className="mt-4"></div>
      TBD - show reminders to enter grades for upcoming assignments, tests, and
      exams.
      <div className="mt-4"></div> */}
      {/* <SemesterStats /> */}
      {/* <div className="mt-8"></div> */}
      <Courses />
    </>
  );
}

export default Dashboard;
