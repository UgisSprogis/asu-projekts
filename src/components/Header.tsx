"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

interface HeaderProps {
    onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
    return (
        <header className="bg-green-600 p-4 flex items-center">
            <button
                onClick={onToggleSidebar}
                className="focus:outline-none mr-3"
                aria-label="Toggle sidebar"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            <Link href="/" className="flex items-center">
                <Image src={logo} alt="ASU logo" width={32} height={32} />
                <span className="ml-2 text-xl font-bold text-white">ASU</span>
            </Link>
            <nav className="ml-auto space-x-4">
                <Link href="/about" className="text-white hover:underline">
                    Par mums
                </Link>
                <Link href="/auth/login" className="text-white hover:underline">
                    Pieslēgties
                </Link>
            </nav>
        </header>
    );
}
