import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import("../components/home/Home"));
const SignUp = lazy(() =>  import("../components/signUp/SignUp"));
const AboutUs = lazy(() => import("../components/aboutUs/AboutUs"));
const DetailPage = lazy(() => import("../components/detailPage/DetailPage"));

const RoutingComponent = (props) => {

    return(
        <Suspense fallback={<div>Loading... </div>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/sign-up" element={ <SignUp /> } />
                <Route path="/about" element={ <AboutUs /> } />
                <Route path="/detail" element={ <DetailPage /> } />
                <Route
                    path="*"
                    element={ <Navigate to="/" /> }
                />
            </Routes>
        </BrowserRouter>
        </Suspense>
    );
};

export default RoutingComponent;