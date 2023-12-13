import React from 'react'
import Link from 'next/link'
import './style.css';


const Loginlayout = ({children}) => {
  return (
    <div className='parent'>
      <ul>
        <li>
      <Link href="/">go to home page</Link>
      </li>
        <li>

        <Link href= "/login/admin">Admin Login</Link>
        </li> 
    <li>    
      <Link href= "/login/userlogin">User Login</Link></li>

      </ul>
      {children}
    </div>
  )
}

export default Loginlayout
