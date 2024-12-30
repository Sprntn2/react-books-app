import useAuthStore from "../stores/authStore";

function useBookSelection(){
    console.log("useFetchBooksSelection starting again")
    const { token, setLovedBooks, lovedBooks } = useAuthStore()

    const selectBook = async (book) => {
        console.log("useFetchBookSelection function triggered")
        console.log("selecting book:", book)

        const url = 'http://localhost:3355/addBook';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(book)
            });
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const data = await response.json();
            setLovedBooks([...lovedBooks, {...book, objectId: data.objectId}]);
        } catch (error) {
            console.log(error);
        }
    }

    const unSelectBook = async (bookId) => {
        console.log("unselecting book:", bookId);

        const url = 'http://localhost:3355/removeBook';
        try {
            const index = lovedBooks.findIndex(b => b.bookId == bookId);
            console.log("book to unselect:", lovedBooks[index])
            const objectId = lovedBooks[index].objectId;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ objectId })
            });
            if (!response.ok) {
                throw new Error(`Failed to delete book: ${response.statusText}`);
            }
            //const data = await response.json();
            // const index = lovedBooks.findIndex(b => b.objectId == objectId)
            console.log("index found", index)
            //if(!index)throw new Error('Book not exist in user\'s books');
            const updated = [...lovedBooks.slice(0, index), ...lovedBooks.slice(index + 1) ]
            console.log("updated lovedBooks:", updated)
            setLovedBooks(updated);
        } catch (error) {
            console.error(error)
        }
    }

    return { selectBook, unSelectBook}
}

export default useBookSelection