import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato"
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

