import LoginIcon from '../../icons/LoginIcon';
import Logo from '../../icons/Logo'
import LogoutIcon from '../../icons/LogoutIcon';
import RegisterIcon from '../../icons/RegisterIcon';
import useAuthStore from '../../stores/authStore';
import Search from '../Search';
import styles from './style.module.scss'
import { Link, useNavigate, } from 'react-router-dom';

export default function Header(){
    const { isLoggedIn, logout } = useAuthStore();
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("logout:", logout)
        logout();
        
        navigate('/');
    };
    return (
        <header className={styles.header}>
            <Link to={`/`}>
                <div className={styles.logoWrapper}>
                    <Logo/>
                    <p>Demo books app</p>
                </div>
            </Link>
            <Search/>
            <div className={styles.user}>
                {isLoggedIn? 
                <button onClick={handleLogout}>
                    <LogoutIcon/>
                </button>
                 : 
                 <>
                    <Link to={"/login"}>
                        <LoginIcon />
                    </Link>
                    <Link to={"/register"}>
                        <RegisterIcon />
                    </Link>
                 </>
                }
            </div>

        </header>
    )
}