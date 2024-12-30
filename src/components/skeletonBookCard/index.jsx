import styles from './style.module.scss'

export default function SkeletonBookCard(){
    return(
        <div className={styles.cardSkeleton}>
            <div className={styles.image}></div>
            <div className={styles.select}>
                
            </div>
        </div>
    )
}