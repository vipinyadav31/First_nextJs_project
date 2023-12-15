import React from "react";
import Link from "next/link";
const page = () => {
    
    const arr = ["raj", "navish", "vipin", "vijay", "rohan", "shivam"];
    return (
        <div>
            <h1>
                getting things from the studentlist component
                <Link href="/">go to home page</Link>
            </h1>
            <ul className="parent">
                {arr.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href = {`/studentlist/${item}`}>
                           {item}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            {/* <ul>
                <li>
                    <Link href="/studentlist/1">vipin</Link>
                </li>
                <li>
                    <Link href="/studentlist/2">vijay</Link>
                </li>
                <li>
                    <Link href="/studentlist/3">raj</Link>
                </li>
                <li>
                    <Link href="/studentlist/4">hariom </Link>
                </li>
            </ul> */}
        </div>
    );
};

export default page;
