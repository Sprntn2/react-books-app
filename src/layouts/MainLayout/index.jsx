import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import BooksList from "../../pages/BooksList";
import LoginPage from "../../pages/LoginPage";

export default function MainLayout(){
    return (
        <>
            <Header/>
            <main>
                main here

                {/* <BrowserRouter> */}
                    <Routes>
                        <Route path="/" element={<BooksList/>}/>
                        <Route path="/login" element={<LoginPage />}/>
                    </Routes>
                {/* </BrowserRouter> */}
            </main>
        </>
    )
}