import React from 'react';
// import 'style.css';
import Link from 'next/link';

const loginPage = () => {
  return (
    <div>
      <h3>getting things form Login page </h3>
      <Link href="/">go to home page</Link>
      <Link href= "/login/admin">Admin Login</Link>
      <Link href= "/login/userlogin">User Login</Link>
    </div>
  )
}

export default loginPage
