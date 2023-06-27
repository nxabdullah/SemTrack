import React from "react";
import Courses from "../components/Courses";

function Home() {
  return (
    <>
      {/* <h1 className="text-2xl font-semibold">your progress</h1>
      <div className="mt-4"></div>
      TBD - show current cgpa, goals, and a graph of your cgpa overtime.
      <div className="mt-4"></div> */}
      {/* <h1 className="text-2xl font-semibold">reminders</h1>
      <div className="mt-4"></div>
      TBD - show reminders to enter grades for upcoming assignments, tests, and
      exams.
      <div className="mt-4"></div> */}
      <h1 className="text-2xl font-semibold">
        your courses <button className="btn float-right">add course</button>
      </h1>
      <div className="mt-4"></div>
      <Courses />
    </>
  );
}

export default Home;
