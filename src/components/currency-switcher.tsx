
"use client";

import * as React from "react"
import { useCurrency } from "@/hooks/use-currency";
import { cn } from "@/lib/utils";


export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex flex-col space-y-1 w-[80px]">
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
  )
}
