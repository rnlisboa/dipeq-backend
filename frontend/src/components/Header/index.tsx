import { useContext } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

import {FiLogOut} from 'react-icons/fi'
import { AuthContext } from "../../contexts/authContext"

export function Header() {

    const {user, signOut } = useContext(AuthContext)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link color="white" href={"/dashboard"}>
                    <img src="https://dipeq.cnat.ifrn.edu.br/wp-content/uploads/2021/06/cropped-LOGO-DIPEQ.png" alt="logo-dipeq"/>
                </Link>

                <span className={styles.user}>{user ? "Olá, " + user.username : ""}</span>
                <nav className={styles.menuNav}>
                    <Link href={"/company"} legacyBehavior>
                        Cadastrar empresa
                    </Link>

                    
                  

                    <button onClick={signOut}>
                        <FiLogOut color="#fff" size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}