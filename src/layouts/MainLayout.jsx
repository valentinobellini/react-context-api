// importa outlet da react router dom
import { Outlet } from "react-router-dom";

// importia componenti
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}