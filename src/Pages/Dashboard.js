import React from 'react'

const Dashboard = () => {

  let user = JSON.parse(sessionStorage.getItem('user'))

  console.log(user)
  return (
    <div>
        <h1 style={{color: 'black'}}>{`Good afternoon, ${user?.name}!`}</h1>
    </div>
  )
}

export default Dashboard