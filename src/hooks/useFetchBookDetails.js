import { useQuery } from "@tanstack/react-query"

function useFetchBookDetails(bookId){
    console.log("useFetchBookDetails starting again")
    const url = "https://www.googleapis.com/books/v1/volumes/" + bookId

    const { data: bookDetails, isLoading, error } = useQuery({
        queryKey: ['bookDetails', bookId],
        queryFn: async () => {
            console.log("useFetchBookDetails function triggered")
            try {
                const response = await fetch(url)
                const data = await response.json();
                const bookDetails = {
                    bookId: data.id,
                    bookName: data.volumeInfo.title,
                    imageSrc: data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail || 'empty',
                    authors: data.volumeInfo.authors,
                    description: data.volumeInfo.description,
                }
                return bookDetails;
                //const bookDetails = data
                //return response.json()
            } catch (error) {
                console.error(error)
            }
        },
    })

    return { bookDetails, isLoading, error, }
}

export default useFetchBookDetails