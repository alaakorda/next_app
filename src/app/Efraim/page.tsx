import Image from "next/image";

export default function Page1() {
  return (
    <main className="bg-blue-100 min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-96 group">
        
        {/* Image with hover zoom */}
        <div className="overflow-hidden">
          <Image
            src="/page_one.jpeg" // Put your image in the public folder
            alt="Card Image"
            width={400}
            height={250}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Text Section with fade-in */}
        <div className="p-4 text-center transition-opacity duration-500 group-hover:opacity-100 opacity-80">
          <h2 className="text-xl font-semibold">Efraim</h2>
          <p className="text-gray-500 mt-2">
           Efraim is not just a brilliant and creative mind, but also a loyal and supportive friend. He’s the kind of person who’s always there when you need him, bringing both kindness and clever ideas to every situation. His talent and creativity stand out in everything he does, and his dedication makes him truly special to work with and to have as a friend.
          </p>
        </div>
      </div>
    </main>
  );
}
