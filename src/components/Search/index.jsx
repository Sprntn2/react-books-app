import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import useBooksStore from '../../stores/booksStore'

export default function Search(){
    const { setSearchQuery, } = useBooksStore()
    const [ inputValue, setInputValue ] = useState('')
    const [ actualValue, setActualValue] = useState('')
    const timeout = 1500;

    useEffect(() => {
        const timer = setTimeout(() => {
            setActualValue(inputValue)
        }, timeout);
        return () => clearTimeout(timer);
    }, [inputValue])

    useEffect(() => {
        actualValue.trim() !== '' && actualValue.trim().length > 2 && setSearchQuery(actualValue)
    }, [actualValue])

    return(
        <div className={styles.search}>
            <input type="text" placeholder="Search" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}