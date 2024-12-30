import { create } from "zustand";
//import { getBooks, } from '../services/booksService'

const useBooksStore = create((set) => ({
    searchQuery: undefined,
    setSearchQuery: (query) => set({ searchQuery: query }),
    page: 0,
    setPage: (page) => set({page}),
    books: [],
    setBooks: (books) => set({ books }),
    //lovedBooks: [],
    // fetchBooks: async (searchQuery) => {
    //     const books = await getBooks(searchQuery);
    //     set({ books });
    // },
    // fetchLovedBooks: async () => {}
    //add loved book
    //delete loved book
}))

export default useBooksStore