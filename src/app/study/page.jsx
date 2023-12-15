import React from 'react'
import Link from 'next/link';

const studypage = () => {
    const arr = ["raj", "navish", "vipin", "vijay", "rohan", "shivam"];

  return (
    <div>
      <h1>all study material</h1>
      {
        arr.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href = {`/study/${item}`}>
                           {item}
                            </Link>
                        </li>
                    );
                })
      }
    </div>
  )
}

export default studypage
