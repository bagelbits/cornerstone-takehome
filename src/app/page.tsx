import type { Metadata } from "next";

import ClientPage from "./ClientPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Diagnoses",
    description: "Diagnoses dashboard",
  };
}

export default function Page() {
  return <ClientPage />;
}
