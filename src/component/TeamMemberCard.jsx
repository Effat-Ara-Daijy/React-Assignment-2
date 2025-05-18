import React from 'react'

const TeamMemberCard = () => {
    const teamMember1= [{id: 1, name: "Daisy", email:"daisy@gmail.com", address: "24 north kafrul"},
                      {id: 2, name: "Humaira", email:"humaira@gmail.com", address: "airport Uttara"},
                      {id: 3, name: "Ariful", email:"ariful@gmail.com", address: "mirpur 13"},
  ]
  return (
    <>
    {teamMember1.map((team)=>{
      return(
        <div className='team-info-card'>
          <div className="team-info-list">
              <h1>Name : {team.name}</h1>
              <p>ID : {team.id}</p>
              <p>Email: {team.email}</p>
              <p>Address: {team.address}</p>
          </div>
      </div>
      )
    })}

    </>

  )
}

export default TeamMemberCard