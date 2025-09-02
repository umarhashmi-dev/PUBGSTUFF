
"use client";

import React from "react";
import { CurrencySwitcher } from "./currency-switcher";

export function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <aside className="fixed top-1/2 left-4 -translate-y-1/2 z-50 hidden md:block">
               <CurrencySwitcher />
            </aside>
            <div className="md:pl-28">
                {children}
            </div>
        </div>
    )
}
