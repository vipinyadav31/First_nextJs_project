// "use client";
import styles from "./page.module.css";
import Link from "next/link";
import profile from "../../public/img5.jpg";
import Image from "next/image";
// import { useReducer } from 'react
// import { useRouter } from "next/navigation";

export default function Home() {
    // const navig = useRouter();

    // const showPage = (locate) => {

    //     navig.push(locate);
    // }
    // const aleartFun = (item) => {
    //     alert(item);
    // };
    console.log(process.env)
    return (
        <main className={styles.main}>
            <User name="vipin yadav" />
            {/* <a href="/users" className="anchor">
                api data nave bar
            </a> */}
            {/* <Link href="/users">api data nave bar</Link> */}
            {/* <button onClick={() => showPage("/users")}>users page  </button>
            <button onClick={() => showPage("/login")}> Login  page  </button> */}

            
             
            <Link href="/studentlist">student LIst</Link>
            <Link href="/study">study</Link>
            <Link href="/users">Data faching </Link>
        </main>

    );
}

const User = (naam) => {
    return (
        <div>
            <h1>my name is {naam.name} & welcome to the home page</h1>
        </div>
    );
};
