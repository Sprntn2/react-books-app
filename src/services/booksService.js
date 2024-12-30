//remove!

import { useQuery } from "@tanstack/react-query"
import useBooksStore from "../stores/booksStore"

const baseUrl = "https://www.googleapis.com/books/v1/volumes/"
const max_result = 20

const useBooks = () => {
    const { setBooks, } = useBooksStore()
    const { data: books, error, isLoading} = useQuery(['books'], async () => {
        const params = {
            printType: 'books',
            maxResults: max_result,
            startIndex: searchQuery.page * max_result,
            q: searchQuery.query
        }
        const response = await fetch('/api/books');
        return response.json();
    })

    useEffect(() => {
        if (books) {
        setBooks(books);
        }
    }, [books, setBooks]);

    return { books, isLoading, error };
}

/*
const getBooks = async (searchQuery) => {
    const params = {
        printType: 'books',
        maxResults: max_result,
        startIndex: searchQuery.page * max_result,
        q: searchQuery.query
    }
    const url = new URL(baseUrl);
    Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
    );
    
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    console.log(data);
    
    return data; //
    //return response.json();
}

export { getBooks, }
*/