import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
import useLocalStorage from "use-local-storage";

export default function App() {
    const [token, setToken] = useLocalStorage("token", null);
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<RequireAuth><Dashboard /></RequireAuth>} path="dashboard" />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}