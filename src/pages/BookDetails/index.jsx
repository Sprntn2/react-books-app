import { Link, useParams } from 'react-router-dom';
import styles from './style.module.scss'
import useFetchBookDetails from '../../hooks/useFetchBookDetails';

export default function BookDetails(){

    const { bookId } = useParams();
    console.log({bookId})
    const { bookDetails, isLoading, error } = useFetchBookDetails(bookId);
    console.log({bookDetails});
    
    if(isLoading) return <h1 style={{ color: "orange"}}> is loading 😊😠😊😠😊😠</h1>

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <p>{bookDetails?.bookName} <span className={styles.authors}>by {bookDetails?.authors?.join(', ')}</span></p>
            </div>
            <div className={styles.description}>
                <p>{bookDetails.description}</p>
            </div>
            <Link to={'./read'}>
                <button className={styles.read}>read this book</button>
            </Link>
        </div>
    )
}