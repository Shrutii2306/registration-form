import React, { useState } from "react";

export default function RegForm ( props ) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState([]);
    const [response, setResponse] = useState([]);
   
    const handleNameChange = EVENT => {
        setName(EVENT.target.value);
        
    }
    const handleEmailChange = EVENT => {
       
        setEmail(EVENT.target.value);
        
    }
    const handleWebsiteChange = EVENT => {
        
        setWebsite(EVENT.target.value);
    }

    const handleImageChange = EVENT => {
        
        setImage(EVENT.target.value);
    }

    const handleGenderChange = EVENT => {
        
        setGender(EVENT.target.value);
    }

    const handleSkillChange = (EVENT) => {
        
        const { value, checked } = EVENT.target;
        const SKILLS  = skills;

        if (checked) {
            setSkills(
              [...SKILLS, value]
            );
            setResponse(
                [...SKILLS, value]
              );
        }
            else {

                
                setSkills( SKILLS.filter((e) => e !== value));
                
                setResponse(SKILLS.filter((e) => e !== value));
              }
          
    }
   
    const handleSubmit = (EVENT) => {

        EVENT.preventDefault();
        props.addStudent({
            id : Math.floor(Math.random() * 10000),
            studentName : name,
            Email : email,
            Website : website,
            Image : image,
            Gender : gender,
            Skills : response,
        })

        setName('');
        setEmail('');
        setWebsite('');
        setImage('');
        setGender('');
        setSkills('');
    }

    const resetForm = (EVENT) => {

        EVENT.preventDefault();
        setName('');
        setEmail('');
        setWebsite('');
        setImage('');
        setGender('');
        setSkills('');
    }

 
    return (

        
            <form className="reg-form">
                <div className="name-div">
                    <div className="name-text">NAME</div><input className="name-text-input" placeholder="name" onChange={handleNameChange} value={name} name="name"></input>
                </div>

                <div className="email-div">
                    <div className="email-text">EMAIL</div><input className="email-text-input" placeholder="Email" onChange={handleEmailChange} value={email} name="email"></input>
                </div>

                <div className="website-div">
                    <div className="website-text">WEBSITE</div><input className="website-text-input" placeholder="Website" onChange={handleWebsiteChange} value={website} name="website"></input>
                </div>
                
                <div className="image-div">
                    <div className="image-text">IMAGE LINK</div><input className="image-text-input"  placeholder="Image Link" onChange={handleImageChange} value={image} name="image"></input>
                </div>

                <div className="gender-div">
                    <div className="gender-text">GENDER:</div>
                    MALE<input className="gender-text-input" type="radio" value="Male"  
                    checked={gender === "Male"}
                    onChange={handleGenderChange}/>
                    FEMALE<input className="gender-text-input" type="radio" value="Female"
                    checked={gender === "Female"}
                    onChange={handleGenderChange} />
                </div>
                
                <div className="skill-div">
                <div className="skill-text">SKILLS:</div>
                    Java<input className="skill-text-input" type="checkbox" value="Java " 
                    
                    onChange={handleSkillChange}/>
                    HTML<input className="skill-text-input" type="checkbox" value="HTML "
                    onChange={handleSkillChange}/>
                    CSS<input className="skill-text-input" type="checkbox" value="CSS "
                    onChange={handleSkillChange}/>
                </div>

                <div className="button-div">
                    <button className="button-input-submit" type="submit" onClick={handleSubmit} >Enroll Student</button>
                    <button className="button-input-reset" type="submit" onClick={resetForm}>Clear</button>
                </div>
                {/*response*/}
            </form>
            
    );
}