import Counter from "./Counter";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to IChO 2026</h1>
        <p className="text-2xl mb-8">Hosted by Uzbekistan</p>
        <div className="flex justify-center space-x-4">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-800 text-2xl font-bold">
            H
          </div>
          <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-blue-800 text-2xl font-bold">
            O
          </div>
          <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-blue-800 text-2xl font-bold">
            Uz
          </div>
        </div>
      </div>
      <Counter />
    </section>
  );
}
