import React from 'react'

const getusers  = async() => {
 
    const result  =  await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await result.json();
    return data;
    
}

export default getusers
