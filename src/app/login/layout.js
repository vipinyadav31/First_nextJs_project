"use client";
import React from "react";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";

const Loginlayout = ({ children }) => {
    const currentpath = usePathname();
    console.log(currentpath)

    return (
        <div>
            {currentpath !== "/login/teacher" ? (
                <ul className="parent">
                    <li>
                        <Link href="/">go to home page</Link>
                    </li>
                    <li>
                        <Link href="/login/admin">Admin Login</Link>
                    </li>
                    <li>
                        <Link href="/login/userlogin">User Login</Link>
                    </li>
                    <li>
                        <Link href="/login/teacher">Teacher Login</Link>
                    </li>
                </ul>
            ) : (
                <Link href="/">Goto home page</Link>
            )}

            {children}
        </div>
    );
};

export default Loginlayout;
