import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage ";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import EditCardPage from "../pages/HomePage/EditCardPage";
import ParamsPage from "../pages/HomePage/ParamsPage";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />
            <Route path={`${ROUTES.EDITCARD}/:idCardExample`} element={<EditCardPage />} />
            <Route path='/params' element={<ParamsPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router