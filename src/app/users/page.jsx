"use client";
// Data feching in this folder using client componenet

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ApiData = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fatchData();
    });
    const fatchData = async () => {
        
        try{

            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const Data = await res.json();
            setApiData(Data);

        }
        catch{
            console.log("erros");
        }
        
    };
    
    // console.log(apiData);
    // document.write(apiData);

    return (
        <div>
            {/* {apiData.map} */}
            <h1> we are in a users route with data faching </h1>
            <Link href="/">home page</Link>
            
            {
                apiData.slice(0,10).map((item , index) => {

                    return(
                        <p key={index}>{item.title}</p>
                    )
                })
            }
        </div>
    );
};

export default ApiData;
