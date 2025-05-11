"use client";

import { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface ClientLayoutProps {
    children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen((open) => !open);

    return (
        <>
            <Header onToggleSidebar={toggleSidebar} />
            <div className="flex">
                {isSidebarOpen && <Sidebar />}
                <main className="flex-1 p-6">{children}</main>

            </div>
        </>
    );
}
