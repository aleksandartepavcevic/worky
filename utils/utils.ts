import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { yupResolver, yup };
