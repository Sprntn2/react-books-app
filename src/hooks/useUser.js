import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../stores/authStore";
//import { useQuery } from 'react-query';

export default function useUserBooks(){
    const url = ""
    const { isLoggedIn, user } = useAuthStore();
    const { isLoading, error } = useQuery(['user'], () => {
        if(isLoggedIn){
            return fetch(url).then(res => res.json())
        }
    },{
        enabled: isLoggedIn,
        staleTime: Infinity,
    })

    return { isLoggedIn, user, isLoading, error };
}

