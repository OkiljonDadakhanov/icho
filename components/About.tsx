import { Video } from "./ui/Video";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About IChO 2026</h2>

        {/* First Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="w-[70%] m-auto">
            <h3 className="text-2xl font-semibold mb-4">The Event</h3>
            <p className="text-gray-700">
              The International Chemistry Olympiad (IChO) is an annual
              competition for the world`s most talented chemistry students at
              the secondary school level. In 2026, Uzbekistan is proud to host
              this prestigious event, bringing together young minds from around
              the globe.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative w-full max-w-lg mx-auto">
            <Video />
          </div>
        </div>

        {/* Second Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="w-[70%] m-auto">
            <h3 className="text-2xl font-semibold mb-4">Uzbekistan</h3>
            <p className="text-gray-700">
              Uzbekistan, with its rich history and vibrant culture, is excited
              to welcome participants to explore the intersection of ancient
              traditions and modern scientific advancements. Our country`s
              commitment to education and innovation makes it the perfect
              backdrop for IChO 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
