// Dynamic routing in this floder
// "use client"
import React from 'react'
import Link from 'next/link'
const studentDetails = ({params}) => {
    console.log(params);
  return (
    <div>
      <h2>getting things from the studentDetails for  {params.student} </h2>
      <Link href='/studentlist'>go back to the studentlist</Link>
    </div>
  )
}

export default studentDetails
