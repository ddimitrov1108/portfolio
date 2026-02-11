import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const TECH_ICON_CLASSES: Record<string, string> = {
  nextjs: "dark:invert",
  shadcnui: "dark:invert",
  ccpayment: "dark:invert",
}

export const getTechIconSrc = (icon: string) => `/tech/${icon}.svg`
export const getTechIconClasses = (icon: string) => TECH_ICON_CLASSES[icon] ?? ""
