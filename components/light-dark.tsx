"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {
  className?: string
}

export function LightDark({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode(prevValue => !prevValue);
            document.body.classList.toggle("dark");
          }}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Light" : "Dark"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}