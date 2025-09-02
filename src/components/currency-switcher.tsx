
"use client";

import * as React from "react"
import { useCurrency } from "@/hooks/use-currency";
import { cn } from "@/lib/utils";


export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="group relative flex items-center">
        <div className="bg-primary h-8 w-6" style={{ clipPath: 'polygon(0 0, 100% 25%, 100% 75%, 0% 100%)' }}></div>
        <div className="absolute left-full ml-2 hidden group-hover:flex flex-col space-y-1 w-[80px] bg-background p-2 rounded-md border shadow-lg">
            <button
                onClick={() => setCurrency('PKR')}
                className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    currency === 'PKR' 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                )}
            >
                PKR
            </button>
            <button
                onClick={() => setCurrency('USD')}
                className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    currency === 'USD' 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                )}
            >
                USD
            </button>
        </div>
    </div>
  )
}
