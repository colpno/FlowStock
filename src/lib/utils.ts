import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPascalCase(text: string, separator: string = " ") {
  return text
    .split(separator)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(separator);
}
