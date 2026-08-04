import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatGuestCount(count: number) {
  return `${count} guest${count === 1 ? "" : "s"}`;
}
