import styles from './style.module.scss'

export default function LoveIcon({isSelected, isSkeleton}){
    return (
        <svg className={styles.heart} viewBox="0 0 24 24">
            <path className={isSelected? styles.selected: isSkeleton? styles.skeleton: styles.notSelected} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3" />
        </svg>
    )
}