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
import Seller from "./pages/Seller"
import Product from "./pages/Product";
import {UserContext} from "./UserContext";
import {useMemo, useState} from "react";
import Receive from "./pages/Receive/Receive";
import Ship from "./pages/Ship/Ship";
import Admin from "./pages/Admin/Admin";
import SellerHistory from "./pages/SellerHistory/SellerHistory";
import AdminHistory from "./pages/AdminHistory/AdminHistory";

function App() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    // const userProvider = useMemo(() => ({user, setUser}), [user, setUser]);
    // for optimizing heavy task that shouldt run every render

    return (
        <div className="App">
            <UserContext.Provider value={{user, setUser}}>
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

                        <Route path='/product/:id' element={<Product/>}/>

                        <Route path='/seller' element={<Seller/>}/>

                        <Route path='/admin' element={<Admin/>}/>


                        <Route path='/receive' element={<Receive/>}/>
                        <Route path='/ship' element={<Ship/>}/>

                        <Route path='/sellerHistory' element={<SellerHistory/>}/>
                        <Route path='/adminHistory' element={<AdminHistory/>}/>


                        {/*<Route path='/register' element={<Register/>}/>*/}
                    </Routes>

                </BrowserRouter>
            </UserContext.Provider>
            <Footer/>
        </div>
    );
}

export default App;

