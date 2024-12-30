import { create } from "zustand";
import { login } from '../services/userService'
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set, get) => ({
            token: null,
            isLoggedIn: false,
            lovedBooks: [],
            setLovedBooks: (lovedBooks) => set({ lovedBooks }),
            login: async (credentials) => {
                try {
                    const data = await login(credentials)
                    if (!data.token) {
                        throw new Error('Token is missing in the response');
                    }  
                    set({ token: data.token, isLoggedIn: true });     
                } catch (error) {
                    console.error('Error logging in:', error)
                    set({ isLoggedIn: false, token: null });
                }
            },
            //logout: () => set({ isLoggedIn: false, user: null }),
            //logout: () => set({ isLoggedIn: false, token: null, lovedBooks: [] }),
            logout: () => {
                console.log("auth store - logout 😃😃")
                // if (get().isLoggedIn) { 
                //     set({ isLoggedIn: false, token: null, lovedBooks: [] });
                // }
                if (get().isLoggedIn) {
                    set({ isLoggedIn: false, token: null, lovedBooks: [] });
                } else {
                    console.log("isLoggedIn is already false")
                }
            }
        }),
        {
            name: 'auth-storage',
            getStorage: () => localStorage,
        }
    )
)

export default useAuthStore

    // selectBook: async (book) => {
    //     console.log("test token:", token)
    //     const url = 'http://localhost:3355/addBook'
    //     try {
    //         const response = await fetch(url, book, {
    //             headers: {
    //                 method: 'POST',
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch books');
    //         }
    //         const data = await response.json();
    //         console.log("data:", data);
    //         set((state) => ({ lovedBooks: [...state.lovedBooks, {...book, objectId: data.objectId}] }))
    //         console.log("new book:", lovedBooks[lovedBooks.length - 1])
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },
    // unselectBook: async () => {},


    /*
    login: async (credentials) => {
        try {
            console.log("auth store login")
            const data = await login(credentials)
            console.log("token:", data.token);
            if (!data.token) {
                throw new Error('Token is missing in the response');
            }
            
            //const data = await response.json();
            //set({ isLoggedIn: true, token: data.token })
            set({ token: data.token, isLoggedIn: true });
            
            // login(credentials).then(data => {
            //     //console.log("login data:", data);
            //     //localStorage.setItem('token', data.token)
            //     //set({ isLoggedIn: true, token: data.token });
            //     const { testToken } = data
            //     console.log("testtoken:", testToken);
            //     set({ isLoggedIn: true, token: testToken });
            //     //set({ isLoggedIn: true, user: data });
            //     console.log("now token is:", token)
            // })
        } catch (error) {
            console.error('Error logging in:', error);
        }
    },
    */
    //logout: () => set({ isLoggedIn: false, user: null }),
    


/*
const useAuthStore = create((set) => ({
    //isLoggedIn: false,
    isLoggedIn: !!localStorage.getItem("token"),
    //user: null,
    // login: (credentials) => {
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(credentials),
    //     }).then(res => res.json()).then(data => {
    //         console.log(data)
    //         set({ isLoggedIn: true, user: data });
    //     })
    // },
    login: (credentials) => {
        try {
            login(credentials).then(data => {
                console.log(data);
                localStorage.setItem('token', data.token)
                set({ isLoggedIn: true });
                //set({ isLoggedIn: true, user: data });
            })
        } catch (error) {
            console.error('Error logging in:', error);
        }   
    },
    logout: () => set({ isLoggedIn: false, user: null }),
}))
// const useStore = create((set) => ({
//     count: 0,
//     increment: () => set((state) => ({ count: state.count + 1 })),
//     decrement: () => set((state) => ({ count: state.count - 1 })),
// }))
*/

//export default useStore
