import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

     <User  name = "vipin yadav" /> 
         <h1>hellow this is vipin </h1>
    </main>
    
  )
}

const User = (naam) => {

  return(
    <div>
      <h1>my name is {naam.name}</h1>
    </div>
  )
}
