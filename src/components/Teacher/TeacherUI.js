import React from "react";
import Navbar from "../Navbar";
import TeacherTable from "./TeacherTable";
import SortedTable from './SortedTable'
const TeacherUI = () => {
  return (
    <div>
      <Navbar />
      <h1 className="Title" style={{textAlign:'left'}}>Welcome To StudEval</h1>

      <br />

<h3 style={{marginLeft: '20px',textAlign:'left'}}>Your Student Records:</h3>
      <br />
      <TeacherTable />

      <SortedTable/>
    </div>
  );
};
export default TeacherUI;
