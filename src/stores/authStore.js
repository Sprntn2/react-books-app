import { create } from "zustand";
import { login } from '../services/userService'

const useAuthStore = create((set) => ({
    isLoggedIn: false,
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

//export default useStore

export default useAuthStore