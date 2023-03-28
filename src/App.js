import AnimatedCursor from "react-animated-cursor";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/navbar";
import HomePage from "./routes/homePage";

import RouteTransition from "./utils/routeTransition";
import hideLoader from "./utils/hideLoader";

export default function App() {
    useEffect(hideLoader, []);

    const documentHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    }
    documentHeight()

    return (
        <>
            <AnimatedCursor innerSize={15} outerSize={50} outerScale={2} color='8, 205, 255' />
            <NavBar />
            <Routes>
                <Route element={<RouteTransition />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    );
}