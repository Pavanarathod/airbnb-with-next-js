import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-6 sm:px-10 py-2 sm:py-4 shadow-lg rounded-full border border-gray-300 my-3 hover:shadow-xl">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
