
"use client";

import * as React from "react"
import { useCurrency } from "@/hooks/use-currency";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="w-[120px] bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="USD">USD ($)</SelectItem>
        <SelectItem value="PKR">PKR (₨)</SelectItem>
      </SelectContent>
    </Select>
  )
}
