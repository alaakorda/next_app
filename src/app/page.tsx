import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Hello</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <Link href="/Efraim">
        <div className="bg-white shadow-lg rounded-xl p-6 w-96 h-96 cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-semibold">Efraim</h2>
          <p className="text-gray-500 mt-2">Click here to get some info about Efraim.</p>
        </div>

        </Link>

      
        <Link href="/page2">
          <div className="bg-white shadow-lg rounded-xl p-6 w-96 h-96 cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold">Alaa</h2>
            <p className="text-gray-500 mt-2">Click here to get some info about Alaa.</p>
          </div>
        </Link>

      </div>
    </main>
  );
}
