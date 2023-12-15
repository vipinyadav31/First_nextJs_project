"use client"
// import React from 'react'

const ClientAction = ({id}) => {
    // console.log(ids);

  return (
    <div>
      <button onClick={() => alert(id)}>clieck me</button>
    </div>
  )
}

export default ClientAction
