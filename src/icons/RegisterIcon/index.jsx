import styles from './style.module.scss'

export default function RegisterIcon(){
    return (
        <div className={styles.circle}>
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 7h-7v2h7v5H3v-5h5v3l4-4l-4-4v3H3V4h18Z" />
            </svg>
            <p>Register</p>
        </div>
    )
}