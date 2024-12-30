import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import BooksList from "../../pages/BooksList";
import LoginPage from "../../pages/LoginPage";
import BookDetails from "../../pages/BookDetails";
import ReadBook from "../../pages/ReadBook";

export default function MainLayout(){
    return (
        <>
            <Header/>
            <main>
                {/* <BrowserRouter> */}
                    <Routes>
                        <Route path="/" element={<BooksList/>}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/book/:bookId" element={<BookDetails/>}/>
                        <Route path="/book/:bookId/read" element={<ReadBook/>}/>
                        <Route path='*' element={<h1>NOT FOUND</h1>} />
                    </Routes>
                {/* </BrowserRouter> */}
            </main>
        </>
    )
}