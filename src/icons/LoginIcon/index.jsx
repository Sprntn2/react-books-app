import styles from './style.module.scss'

export default function LoginIcon(){
    return (
        <div className={styles.circle}>
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 19q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1zm0-2h16V5H4zm0 0V5zm4-2h8v-.55q0-1.125-1.1-1.787T12 12t-2.9.663T8 14.45zm4-4q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11" />
            </svg>
            <p>Login</p>
        </div>
    )
}