import Link from "next/link";
import ClientAction from "./ClientAction";
const faching = async() => {

    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    // setApiData(Data);
    return data;
}

// import React from 'react'

const ServerHandling = async() => {
    const list =  await faching();
    // console.log(list);
  return (
    <div>
     <h3>In a server componet</h3>
     <Link href='/'>go to home page</Link>

       {
        list.map((item , index) => {
            return(<div key={item.id}>
                       <p key={index}>{item.title} </p>
                       <ClientAction id = {item.id}/>

                </div>
                
            )
        })

       }
    </div>
  )
}

export default ServerHandling
