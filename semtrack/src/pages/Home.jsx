import React from "react";
import Courses from "../components/Courses";

function Home() {
  return (
    <>
      <h1 className="text-2xl font-semibold">your courses</h1>
      <div className="mt-4"></div>
      <Courses />
    </>
  );
}

export default Home;
