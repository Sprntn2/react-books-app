import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../stores/authStore'
import styles from './style.module.scss'
import { useEffect } from 'react'

export default function LoginPage(){

    const navigate = useNavigate()
    const { login, isLoggedIn} = useAuthStore()

    useEffect(() => {
        isLoggedIn && navigate("/")
    }, [isLoggedIn])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("login submit");
        
        const formData = new FormData(e.target)

        //await login({email:formData.get("email"), password: formData.get("password")})
        login({email:formData.get("email"), password: formData.get("password")})
        //console.log("is logged in:", isLoggedIn);
        
        //isLoggedIn && navigate("/")
        // if(isLoggedIn){
        //     console.log("navigating to home page");
        //     navigate('/')
        // }
        // else{
        //     console.log("not logged in yet");
            
        // }
    }
    
    useEffect(() => {
        //if(isLoggedIn) navigate('/')
        console.log("isLoggedin changed to", isLoggedIn);
        
        if(isLoggedIn) navigate('/')
    }, [isLoggedIn])

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