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
          Efraim is a very smart and creative person, and he’s also a true friend. Whenever I need help or someone to talk to, he’s always there. He listens, gives ideas, and somehow makes things better. He has this way of making people feel comfortable and supported. And okay… I have to admit, sometimes he can be a little evil — but in the best way possible. Everything he does shows his talent and his kind heart. I’m really lucky to work with him and to have him as my best and most loyal friend.
          </p>
        </div>
      </div>
    </main>
  );
}
