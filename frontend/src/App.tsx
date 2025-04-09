import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Sets from "./pages/Sets.tsx";
import Help from "./pages/Help.tsx";
import MainPage from "./pages/MainPage.tsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"sets"} element={<Sets/>}/>
                    <Route path={"help"} element={<Help/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;