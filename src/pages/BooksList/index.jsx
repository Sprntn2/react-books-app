import { useEffect } from 'react';
import useFetchBooks from '../../hooks/useFetchBooks';
import useAuthStore from '../../stores/authStore'
import styles from './style.module.scss'
import BookCard from '../../components/BookCard';
import SkeletonBookCard from '../../components/skeletonBookCard';
//import useFetchBooksCart from '../../hooks/useFetchBooksCart';
import Cart from '../../components/Cart';
import useFetchBooksCart from '../../hooks/useFetchBooksCart';

export default function BooksList(){
    const { booksCart, refetch, isFetching, isError, error} = useFetchBooksCart()
    //const { isLoggedIn, lovedBooks, toggleLovedBook, } = useAuthStore()
    const { isLoggedIn, lovedBooks, setLovedBooks } = useAuthStore()
    //const { books, isLoading, error } = useFetchBooks();
    const booksResult = useFetchBooks();
    //const { booksCart, cartError, isLoadingCart} = useFetchBooksCart()
    
    useEffect(() => {
        console.log("lovedBooks changed", booksCart)
        console.log("lovedBooks:", lovedBooks)
        if(booksCart && booksCart != lovedBooks)setLovedBooks(booksCart)
    }, [booksCart])

    return(
        <div className={styles.container}>
            {/* {isLoggedIn && <p style={{ color: "yellow"}}>Welcome back!</p>}
            {isLoading && <h1 style={{ color: "green"}}>is loading😊😠😊😠😊😠</h1>}
            {books? <h1 style={{ color: "purple"}}>actual books</h1>: <p style={{ color: "pink"}}>no books</p>}
            {books && <h1 style={{ color: "orange"}}>books found 😍😍😍😍😍😍</h1>} */}
            {isLoggedIn && <Cart />}
            <div className={styles.booksList}>
                {
                    booksResult.books || booksResult.isLoading ?
                    <div className={styles.grid}>
                        {booksResult.isLoading ? 
                            <>
                                {[...Array(20)].map((_, i) => <SkeletonBookCard key={i} />)}
                            </>:
                            lovedBooks.length? 
                            <>
                                {booksResult.books?.map((book) => <BookCard selected={lovedBooks.some(b => b.bookId == book.bookId)} key={book.bookId} book={book} />)}
                            </>:
                            <>
                                {booksResult.books?.map((book) => <BookCard key={book.bookId} book={book} selected={false}/>)}
                            </>
                        }
                    </div> :
                    <h1 style={{ color: "orange"}}>messages goes here</h1>
                    // books? 
                    // <div className={styles.grid}>
                    //     {books?.map((book, i) => <BookCard key={i} book={book}/>)}
                    // </div> :
                    // isLoading? 
                    // <div className={styles.grid}>
                    //     {[...Array(20)].map((b,i) => <SkeletonBookCard key={i} />)}
                    // </div> : 
                    // <h1 style={{ color: "orange"}}>messages goes here</h1>
                }
            </div>
            {/* {books?.map(book => <BookCard book={book}/>)} */}
        </div>
    )
}