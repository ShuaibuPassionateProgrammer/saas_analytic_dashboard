"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

import { Sidebar } from "./sidebar"
import { useState } from "react"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex items-center p-4 border-b border-zinc-200 dark:border-zinc-800 h-16 bg-white dark:bg-zinc-950">
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu />
            </Button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="fixed inset-y-0 left-0 w-72 bg-zinc-900" onClick={(e) => e.stopPropagation()}>
                        <Sidebar />
                    </div>
                </div>
            )}

            <div className="flex w-full justify-end">
                {/* User menu or other items can go here */}
                <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
        </div>
    )
}
