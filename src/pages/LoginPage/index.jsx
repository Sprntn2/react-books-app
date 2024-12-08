import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../stores/authStore'
import styles from './style.module.scss'

export default function LoginPage(){

    const navigate = useNavigate()
    const { login, isLoggedIn} = useAuthStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        await login({email:formData.get("email"), password: formData.get("password")})
        isLoggedIn && navigate("/")
    }

    return(
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="email">Enter your email</label>
                <input className={styles.txtInput} id="email" type="text" name="email"/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Enter your password</label>
                <input className={styles.txtInput} id="password" type="text" name="password" />
                <div className={styles.formGroup}>
                    <button className={styles.btn} type="submit">submit</button>
                </div>
            </div>
        </form>
    )
}