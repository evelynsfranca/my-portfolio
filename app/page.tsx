import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evelyn França | Home"
};

export default function Index() {
  return (
    <Home />
  );
}
