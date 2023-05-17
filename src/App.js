import React from 'react';
import {Routes, Route} from "react-router-dom"
import LoginPage from "./components/Authorization/pages/LoginPage";
import RegisterPage from "./components/Authorization/pages/RegisterPage"
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import PersonalAccount from "./components/Personal account/PersonalAccount";
import AttractionsContainer from "./components/Attractions/AttractionsContainer";


function App() {
    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
                <Route exact path={'/login'} element={<LoginPage/>}/>
                <Route exact path={'/register'} element={<RegisterPage/>}/>
                <Route exact path={'/personal-account'} element={<PersonalAccount/>}/>
                <Route exact path={'/attractions'} element={<AttractionsContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;

