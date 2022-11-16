import React, { useState } from 'react'

function User({data, friends}) {
  const [user, setUser]=useState({name: " Taner ", surname: " Culha "});
  return (
    <div>
      <h2>Props(Obje and Array, PropTypes) - Personel Info</h2>
        <div>Full Name: {data.name}</div>
        <div>Age: {data.age}</div>
        <div>City: {data.city}</div>
        <hr/>
        <h2> Props(friends maps)</h2>
        <i>Friends</i>
        {
            friends.map(friends=>(
                <div> {friends}</div>
            ))
        }
        <hr/>
        <div>
          <h2>State(useState Object) - User</h2>
          {user.name}{user.surname}
          <br/>
          <br/>
          <div>
            <button onClick={() => setUser({  ...user, name:  " Test Name "})}> Name Change</button>
            <button onClick={() => setUser({  ...user, surname: " Test Surname  "})}> Surname Change</button>
          </div>
        </div>
    </div>
  )
}

export default User