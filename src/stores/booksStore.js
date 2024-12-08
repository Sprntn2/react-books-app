import { create } from "zustand";

const useBooksStore = create((set) => ({
    books: [],
    lovedBooks: [],
    //get books
    //get loved books
    //add loved book
    //delete loved book
}))