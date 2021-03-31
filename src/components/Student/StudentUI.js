import React from 'react'
import Navbar from '../Navbar'
import StudentTable from './StudentTable'
import StudentEvaluation from './StudentEvaluation'
const StudentUI = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="Title" style={{textAlign:'left'}}>Welcome To StudEval</h1>

<br/>

            <h3 style={{margin:'20px',textAlign:'left'}}>Your Records</h3>
<br/>
            <StudentTable/>
            <StudentEvaluation/>
        </div>
    )

    }
export default StudentUI