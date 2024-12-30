import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import useAuthStore from '../../stores/authStore'
import LoveIcon from '../../icons/LoveIcon'
import useBookSelection from '../../hooks/useBookSelection'
import { useEffect } from 'react'

export default function BookCard({book, selected}){
    const { bookId, imageSrc, bookName, } = book
    const { isLoggedIn, } = useAuthStore()
    const { selectBook, unSelectBook } = useBookSelection()

    const toggleBook = () => {
        console.log("is logged in:", isLoggedIn);
        console.log("book:", book);
        
        if(isLoggedIn){
            if(selected){
                console.log("book card - unselecting book:", bookName)
                unSelectBook(bookId)
            }
            else{
                console.log("book card - selecting book:", bookName);
                selectBook(book)
            }
        }
        else{
            console.log("you are not logged in")
        }
    }

    //console.log(`the book ${bookName} is selected: ${selected}`);
    

    return (
        <div className={styles.bookCard}>
            <Link to={`/book/${bookId}`}>
                <img src={imageSrc? imageSrc : '/book.webp'}/>
                <div className={styles.title}>
                    {bookName}
                </div>
            </Link>
            <div className={styles.select}>
                <button onClick={toggleBook}><LoveIcon isSelected={selected}/></button>
            </div>
        </div>
    )
}