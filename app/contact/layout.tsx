import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Evelyn França | Contato",
  description: "My portfolio",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

