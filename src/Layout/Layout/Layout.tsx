import type { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;