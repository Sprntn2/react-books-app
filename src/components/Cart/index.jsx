import { useEffect } from 'react'
import useFetchBooksCart from '../../hooks/useFetchBooksCart'
import useAuthStore from '../../stores/authStore'
import BookCard from '../BookCard'
import styles from './style.module.scss'

export default function Cart(){
    //const { booksCart, cartError, isLoadingCart} = useFetchBooksCart()
    const { booksCart, cartError, isLoadingCart} = useFetchBooksCart()
    const { lovedBooks, setLovedBooks, } = useAuthStore()
    console.log("loved books:", lovedBooks)
    //console.log("books cart:", booksCart)

    if (isLoadingCart) return (<h1>is Loading</h1>)
    if (cartError) return (<h1>error</h1>)

    // useEffect(() => {
    //     console.log("lovedBooks changed", booksCart)
    //     if(booksCart != lovedBooks)setLovedBooks(booksCart)
    // }, [booksCart])

    return (
        // <div className={styles.booksCart}>
        //     {booksCart?.length && booksCart.map(book => <BookCard key={book.bookId} book={book}/>)}
        // </div>
        <>
            {/* {booksCart?.length > 0 &&  */}
            {lovedBooks?.length > 0 && 
                <div className={styles.booksCart}>
                    {/* {booksCart.map(book => <BookCard key={book.bookId} book={book} selected={true}/>)} */}
                    {lovedBooks.map((book, i) => <BookCard key={i} book={book} selected={true}/>)}
                </div>}
        </>
    )
}