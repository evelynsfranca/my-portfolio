import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contato"
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>
}

