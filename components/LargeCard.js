import Image from "next/image";

const LargeCard = ({ img, title, description, buttontext }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="sm:text-4xl mb-3 w-64 text-xl font-semibold">{title}</h3>

        <p className="text-sm mt-1">{description}</p>

        <button className="mt-3 px-4 sm:px-6 py-1 sm:py-2 border-none outline-none rounded-lg bg-black text-white">
          {buttontext}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
