import React from 'react'

function User({data, friends}) {
  return (
    <div>Personel Info
        <div>Surname: {data.name}</div>
        <div>Age: {data.age}</div>
        <div>City: {data.city}</div>
        <hr/>
        <i>Friends</i>
        {
            friends.map(friends=>(
                <div> {friends}</div>
            ))
        }
    </div>
  )
}

export default User