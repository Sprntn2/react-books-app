import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../stores/authStore";
//import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function useFetchBooksCart(){
    const url = 'http://localhost:3355/cart'
    //const navigate = useNavigate()
    const { isLoggedIn, token, setLovedBooks, logout} = useAuthStore();
    //const { isLoggedIn, token } = useAuthStore();
    //console.log("isLoggedIn:", isLoggedIn);
    console.log("useFetchBooksCart starting again, isLoggedIn:", isLoggedIn);
    
    const { 
        data: booksCart, 
        isLoading, 
        error,
        isError,
        refetch,
        isFetching,
    } = useQuery({
        queryKey: ['booksCart'],
        queryFn: async () => {
            console.log("queryFn started, isLoggedIn:", isLoggedIn);

            try {
                const response = await fetch( url, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    if (response.status === 401) {
                        console.log("Unauthorized error 😁😠")
                        throw new Error("Unauthorized"); // זריקת שגיאה ספציפית
                    }
                    const errorText = await response.text();
                    throw new Error(`Failed to fetch books: ${response.status} - ${errorText}`);
                }
                return await response.json();
            } catch (err) {
                console.error(err);
                //return Promise.reject(err);
                //throw err
                return []
            }  
        },
        enabled: isLoggedIn,
        // onError: (error) => {
        //     console.log("on error triggered 🐞🐞🐞")
        //     console.error("Error in useQuery:", error);
        //     if (error.message === "Unauthorized") {
        //         logout();
        //         navigate('/');
        //     }
        // },
        // onSuccess: (data) => {
        //     console.log(data)
        //     console.log("success event, data:", data)
        //     if (data) {
        //         setLovedBooks(data);
        //     }
        // },
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        // console.log("Error object:", error);
        // console.log(typeof error)
        console.log("fect books cart error event 😠😠😠😠")
        if(error && error.message === "Unauthorized"){
            console.log("unauthorized, logong out and navigating home")
            logout();
            //navigate('/');
        }
    }, [isError])


    return { isLoading, error, isError, booksCart, refetch, isFetching };
}

export default useFetchBooksCart