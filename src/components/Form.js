import React, {useState} from 'react'

function Form() {
    const [name, setName]=useState("");
    const [surname, setSurname]=useState("");
    const [gender, setGender]=useState("0");
  return (
    <div>
        <h2>State Form</h2>
        <div>
            <div>Full Name</div>
            <input placeholder="Name" value={name} onChange={(event) =>setName(event.target.value)}/>
            <input placeholder="Surname" value={surname} onChange={(event) =>setSurname(event.target.value)}/>
        </div>
        <br/>
        <div>
            <div>Gender</div>
            <select value={gender} onChange={(event)=>setGender(event.target.value)}>
                <option value="0">Man</option>
                <option value="1">Woman</option>
            </select>
        </div>    
        <br/>  
        <div>
            Full Name: <strong> {name} {surname} </strong>
        </div>
        <div>
            Gender: <strong> {gender==="0" ? "Man" : "Woman"} </strong>
        </div>
        <hr/>
    </div>
  )
}

export default Form