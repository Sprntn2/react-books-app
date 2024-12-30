import styles from './style.module.scss'
import { useNavigate, useParams } from "react-router-dom";

export default function ReadBook(){
    const {bookId} = useParams();
    console.log("bookId:", bookId);
    return (
        <h1>read book page</h1>
    )
}