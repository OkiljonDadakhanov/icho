export default function Schedule() {
  return (
    <section id="schedule" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Event Schedule</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md ml-5 w-[90%]">
            <h3 className="text-2xl font-semibold mb-4">
              Day 1-2: Arrival and Opening Ceremony
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Welcome reception</li>
              <li>Cultural performances</li>
              <li>Opening speeches</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] mr-5">
            <h3 className="text-2xl font-semibold mb-4">
              Day 3-4: Theoretical Examination
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>5-hour written exam</li>
              <li>Problem-solving sessions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md ml-5 w-[90%]">
            <h3 className="text-2xl font-semibold mb-4">
              Day 5-6: Practical Examination
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>5-hour laboratory work</li>
              <li>Experimental tasks</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] mr-5">
            <h3 className="text-2xl font-semibold mb-4">
              Day 7-8: Excursions and Closing Ceremony
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Sightseeing tours</li>
              <li>Award ceremony</li>
              <li>Farewell party</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
