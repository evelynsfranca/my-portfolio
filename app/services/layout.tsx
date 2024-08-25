import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Serviços"
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

