import styles from './style.module.scss'

export default function LogoutIcon(){
    return (
        <div className={styles.circle}>
            <svg width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                    <path d="M11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C21.947 6.29 21.998 8.06 22 11.5" />
                    <path d="M20.5 14h-5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5M6.004 11.501v-2.5c-.048-.574.396-1.024 1-1h2.5m1.5 5l-4-4" />
                </g>
            </svg>
            <p>Logout</p>
        </div>
    )
}