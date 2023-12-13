import React from 'react'
import Link from 'next/link';

const ApiData =  async () => {
     
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const  apiData = await res.json();
    // document.write(apiData);

   
  return (
    <div>
    {/* {apiData.map} */}
    <h1> we are in a users route </h1>
       <Link href= '/'>home page</Link>
      </div>
  )
}

export default ApiData
