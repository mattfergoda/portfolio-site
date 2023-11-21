// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/button";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import LightDarkButton from "./LightDarkButton";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      {
        theme === 'dark'
        ? <LightDarkButton handleClick={() => setTheme('light')} dark={true} />
        : <LightDarkButton handleClick={() => setTheme('dark')} dark={false} />
      }
    </div>
  )
};