import React from "react";
import getusers from "../../../../services/getusers";
import Link from "next/link";

const usersIdShows = async (prop) => {
    const UserData = await getusers();
    const list = await UserData;
    const currentId = prop.params.userlds;
    const selectedData = list[currentId - 1];
    // console.log(list[currentId-1]);
    return (
        <div>
            <h1>getting thinges from sectioned user name</h1>
        <h2>user deteails</h2>
        <h2> Name : {selectedData.name}</h2>
        <h2>  User name  : {selectedData.username}</h2>
        <h2> Email :    {selectedData.email}</h2>
        {/* <h2>{selectedData}</h2> */}
        <h1>

        <Link href='/staticbuilduser'>go to the all users</Link>
        </h1>
        </div>
    );
};

export default usersIdShows;

  export const   generateStaticParams  =  async()=> {
    const UserData = await getusers();
    const list = await UserData;
    return list.map(item => ({
        userlds: item.id.toString()
    }))
     
 }