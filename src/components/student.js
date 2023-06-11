import React from "react";

export default function Student ({studentData}) {

console.log(studentData);
return studentData.map((student,index) => (

    <div  key = {index} className="student-container">
        <div className="student-details">
            <div>NAME : {student.studentName}</div> 
            <div>E-MAIL : {student.Email}</div>
            <div>WEBSITE : {student.Website}</div>
            <div>GENDER : {student.Gender}</div>
            <div>SKILLS : {student.Skills}</div>  
        </div>
        <div className="stud-image-div">
            <img src={student.Image}  alt="" className="image"/>
            
        </div>
        
    </div>
))
    
}