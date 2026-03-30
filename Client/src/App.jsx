import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="auth">
                    <Route path="login" element={<LoginPage />}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
};