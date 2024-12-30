import { useQuery } from "@tanstack/react-query"
import useBooksStore from "../stores/booksStore"
import { useEffect } from "react"


function useFetchBooks(){
    console.log("useFetchBooks starting again")
    const baseUrl = "https://www.googleapis.com/books/v1/volumes"
    const max_result = 20
    const { searchQuery, page, setBooks } = useBooksStore()

    const { data: books, isLoading, error } = useQuery({
        queryKey: ['books', searchQuery, page],
        queryFn: async () => {
            console.log("useFetchBooks function triggered")
            setTimeout(async () => {
            }, 5000);
            const url = `${baseUrl}?printType=books&maxResults=${max_result}&startIndex=${page * max_result}&q=${searchQuery}`
            //for show is loading content version
            return new Promise((resolve) => {
                setTimeout(() => {
                    fetch(url)
                    .then(response => response.json())
                    .then(serverBooks => {
                        const mappedBooks = serverBooks.items.map(book => ({
                            bookId: book.id,
                            bookName: book.volumeInfo.title,
                            imageSrc: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail || undefined
                        }))
                        //return mappedBooks
                        resolve(mappedBooks)
                    });
                }, 4000); // Delay of 2 seconds
              });

            
            const response = await fetch(url);
            //return response.json();
            
            const serverBooks = await response.json();
            const mappedBooks = serverBooks.items.map(book => ({
                bookId: book.id,
                bookName: book.volumeInfo.title,
                imageSrc: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail || undefined
            }))
            //console.log("mapped books:", mappedBooks);
            return mappedBooks;
            //return response.json()
            
        },
        enabled: !!searchQuery,
        // onSuccess: (data) => {
        //     console.log("success event, data:", data)
        //     if(data) setBooks(data)
        // }
    })
    /*
    const { data: books, isLoading, error } = useQuery(['books', searchQuery, page], async () => {
        const params = {
            printType: 'books',
            maxResults: max_result,
            startIndex: page * max_result,
            q: searchQuery
        }
        const url = new URL(baseUrl);
        Object.keys(params).forEach((key) =>
            url.searchParams.append(key, params[key])
        );
        const response = await fetch(url);
        return response.json();
    }, { enabled: !!searchQuery,})
    */
    //test only
    // useEffect(() => {
    //     console.log("new search query:", searchQuery);    
    // }, [searchQuery])

    // useEffect(() => {
    //     console.log("books changed");
    //     if (books) {
    //         setBooks(books);
    //         //console.log("now books is", books);
    //     }
    // }, [books]);
    //}, [books, setBooks]);
    
    return { books, isLoading, error };
}
export default useFetchBooks