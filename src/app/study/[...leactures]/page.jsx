"use client ";
import React from 'react'
import Link from 'next/link';


const leachers = ({params}) => {
    // console.log(params);
  return (
    <div>
       {/* <h2>leacher{params.leacher[0]}</h2> */}
        <h2>time{params.leactures[0]}</h2>
       <h2>durantion  { params.leactures[1]} hours</h2> 
       <Link href='/study'>go to all lechers</Link>
    </div>
  )
}

export default leachers;
