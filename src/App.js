import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NavigationBar from "./pages/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import ViewProducts from "./pages/ViewProducts/ViewProducts";
import AboutUs from "./pages/AboutUs/AboutUs";
import Crud from "./pages/Crud/Crud";
import Forget from "./pages/Forget/Forget";
import Footer from "./pages/Footer/Footer";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar/>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="viewProducts" element={<ViewProducts/>}/>
                    <Route path="aboutUs" element={<AboutUs/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/crud' element={<Crud/>}/>
                    <Route path='/forget' element={<Forget/>}/>
                    <Route path='/cart' element={<Cart/>}/>

                    {/*<Route path='/register' element={<Register/>}/>*/}
                </Routes>

            </BrowserRouter>

            <Footer/>

        </div>
    );
}

export default App;

