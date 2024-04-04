import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Header = lazy(()=> import("../components/header/Header"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Home = lazy(() => import("../components/home/Home"));
const SignUp = lazy(() =>  import("../components/signUp/SignUp"));
const AboutUs = lazy(() => import("../components/aboutUs/AboutUs"));
const DetailPage = lazy(() => import("../components/detailPage/DetailPage"));
const VerificationPage = lazy(() => import("../components/verification/Verification"));

const RoutingComponent = (props) => {

    const [footerPage, setFooterPage] = useState(false);

    useEffect(() => {
        if(window.location.pathname === "/login" || window.location.pathname === "/verification") {
            setFooterPage(false);
            // console.log("entering here");
        } else {
            setFooterPage(true);
            // console.log("eome in elese part");
        }
        // console.log(window.location.pathname,"window.location.pathname");
    },[footerPage, window.location.pathname])

    return(
        <Suspense fallback={<div>Loading... </div>}>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <SignUp /> } />
                <Route path="/about" element={ <AboutUs /> } />
                <Route path="/detail" element={ <DetailPage /> } />
                <Route path="/verification" element={ <VerificationPage /> } />
                <Route
                    path="*"
                    element={ <Navigate to="/" /> }
                />
            </Routes>
            {footerPage && <Footer />}
        </BrowserRouter>
        </Suspense>
    );
};

export default RoutingComponent;