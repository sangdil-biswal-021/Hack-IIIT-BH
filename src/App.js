import AnimatedCursor from "react-animated-cursor";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Sponsor from "./routes/sponsorPage"
import NavBar from "./components/navbar";
import HomePage from "./routes/homePage";
import Format from "./routes/formatPage";

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
            <AnimatedCursor innerSize={15} outerSize={50} outerScale={2} color='255,0,0' />
            <NavBar />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Routes>
                <Route element={<RouteTransition />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/format" element={<Format/>} />
                    <Route path="/sponsor" element={<Sponsor/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    );
}