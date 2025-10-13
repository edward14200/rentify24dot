export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-5xl font-bold mb-6">🏠 Rentify24</h1>
      <p className="text-lg text-gray-300 mb-8">
        Rentify – wo Transparenz zuhause ist.
      </p>
      <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
        Jetzt bewerten
      </button>
    </main>
  );
}
