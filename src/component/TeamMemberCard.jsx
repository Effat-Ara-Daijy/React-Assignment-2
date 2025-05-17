import React from 'react'

const TeamMemberCard = ({id,name,email,address}) => {
  return (
    <div className='team-info-card'>
        <div className="team-info-list">
            <h1>Name : {name}</h1>
            <p>ID : {id}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
        </div>
    </div>
  )
}

export default TeamMemberCard