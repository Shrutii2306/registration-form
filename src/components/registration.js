import React, { useState } from "react";
import RegForm from "./reg-form";
import Student from "./student";
export default function Registration () {

  

    const [studentData , setstudentData] = useState([]);

    const addStudent = student => {
        
        if (!student.studentName || !student.Email )
        {
            return
        }
        const newStudentData = [student,...studentData];
       
         setstudentData(newStudentData);
         
      
        
    }
    console.log(studentData);
    return (

        <div>
            <div className="heading">STUDENT ENROLLMENT FORM</div>
            <div className="reg-form-container">
                <RegForm addStudent = {addStudent}></RegForm>
            </div>
           
            <div className="student-data-container">
                <div className="sub-heading">ENROLLED STUDENTS</div>
                <div className="content">
                    <Student studentData={studentData}></Student>
                </div>
            </div>
            
        </div>
        
           
    );
}