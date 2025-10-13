// app/page.tsx

import React from "react";
import Button from "../components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800 space-y-6 p-8">
      <h1 className="text-5xl font-bold">Rentify24</h1>
      <p className="text-xl max-w-2xl text-center">
        Rentify – wo Transparenz zuhause ist.
      </p>
      <div className="space-x-4">
        <Button variant="primary" href="/bewertungen/neu">
          Wohnung bewerten
        </Button>
        <Button variant="outline" href="/wohnungen">
          Wohnungsübersicht
        </Button>
      </div>
      <div className="mt-10 space-x-4">
        <Button variant="secondary" href="/features">
          Mehr erfahren
        </Button>
        <Button variant="primary" href="/kontakt">
          Kontakt
        </Button>
      </div>
    </main>
  );
}
