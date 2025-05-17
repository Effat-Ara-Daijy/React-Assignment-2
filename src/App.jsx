import React from 'react'
import './App.css'
import TeamMemberCard from './component/TeamMemberCard'

const App = () => {
  const teamMember1= [{id: 1, name: "Daisy", email:"daisy@gmail.com", address: "24 north kafrul"},
                      {id: 2, name: "Humaira", email:"humaira@gmail.com", address: "airport Uttara"},
                      {id: 3, name: "Ariful", email:"ariful@gmail.com", address: "mirpur 13"},
  ]

    return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className="row">
            {teamMember1.map((member) => 
              {
                return(
                  <div className="col-lg-4">
                    <TeamMemberCard  key={member.id} id={member.id} name={member.name} email={member.email} address={member.address} />
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
