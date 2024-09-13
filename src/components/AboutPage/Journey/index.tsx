import React from "react";

const timelineData = [
  {
    year: "2005",
    description:
      "In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey.",
  },
  {
    year: "2010",
    description:
      "Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities.",
  },
  {
    year: "2012",
    description:
      "In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens.",
  },
  {
    year: "2015",
    description:
      "Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services.",
  },
  {
    year: "2017",
    description:
      "Damien's work took her beyond the USA, capturing breathtaking scenes and cultures from around the world.",
  },
  {
    year: "2020",
    description:
      "In 2020, Damien's dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer.",
  },
];

const Journey: React.FC = () => {
  return (
    <div className="text-white py-16">
      <section className="container mx-auto px-4">
        <div className="border-b border-about-bg pb-6 mb-14">
          <p className="uppercase text-base text-zinc-400">Journey</p>
          <h1 className="text-4xl font-bold">DAMIEN'S JOURNEY - A TIMELINE</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {timelineData.map((item, index) => (
            <div key={index} className="bg-zinc-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">YEAR - {item.year}</h2>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Journey;
