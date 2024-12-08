import Logo from '../../icons/Logo'
import useAuthStore from '../../stores/authStore';
import styles from './style.module.scss'
import { Link, NavLink } from 'react-router-dom';

export default function Header(){
    const { isLoggedIn, logout } = useAuthStore()
    return (
        <header className={styles.header}>
            <Link to={`/`}>
                <div className={styles.logoWrapper}>
                    <Logo/>
                    <p>Demo books app</p>
                </div>
            </Link>


            <div className={styles.user}>
                {isLoggedIn? 
                <button onClick={logout}>
                    <p>leave</p>
                </button>
                 : 
                 <>
                    <NavLink to={"/login"}>
                        <p>login</p>
                    </NavLink>
                    <NavLink to={"/register"}>
                        <p>register</p>
                    </NavLink>
                 </>
                }
            </div>

        </header>
    )
}