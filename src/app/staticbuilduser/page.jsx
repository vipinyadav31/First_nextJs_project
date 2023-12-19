import React from "react";

import getusers from "../../../services/getusers";
import Link from "next/link";

const staticBulidGenration = async () => {
    const UserData = await getusers();
    const list = await UserData;
    // console.log(list)
    return (
        <div>
            <h1>gernrate HTML in build time</h1>
            <h2>getting things with static site gernration</h2>

            {list.map((item, index) => {
                return (
                    <h2 key={index}>
                        <Link href={`/staticbuilduser/${item.id}`}>
                            {item.username}
                        </Link>
                        
                    </h2>
                );
            })}
        </div>
    );
};

export default staticBulidGenration;
