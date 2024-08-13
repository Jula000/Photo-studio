import React from "react";

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-zinc-400 border-b border-about-bg mb-10">
      {" "}
      <div className="flex justify-between">
        <div className="flex-cols">
          <p className="uppercase text-base text-zinc-400">Services</p>
          <h2 className="text-3xl font-bold mb-4 text-white uppercase">
            Diverse Photography Offerings
          </h2>
        </div>
        <div
          className="h-28 lg:w-7/12 xl:w-4/6 rounded-3xl overflow-hidden bg-cover bg-center self-start md:block"
          style={{ backgroundImage: "url('/kytsya.jpg')" }}
        />
      </div>
      <p className="text-lg leading-relaxed">
        Unlock the full spectrum of professional photography services tailored
        to your vision. From timeless portraits to captivating event coverage, I
        bring a unique blend of creativity and technical expertise to each
        project
      </p>
      <div className="container mx-auto px-4 mb-4 pt-8">
        <div
          className="relative w-full h-96 rounded-3xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/kytsya.jpg')" }}
        ></div>
      </div>
    </section>
  );
};
export default ServicesSection;
