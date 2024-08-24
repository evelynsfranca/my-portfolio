import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Contato"
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

