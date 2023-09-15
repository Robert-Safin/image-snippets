import Image from "next/image";

const Image3 = () => {
  return (
    <div className="m-20 relative w-fit group overflow-hidden">
      <Image
        src="/me.png"
        alt=""
        height={1000}
        width={1000}
        className="w-[400px] h-[400px] object-cover

        "
      />
      <div
        className="w-[400px] h-[400px] absolute flex flex-col justify-center items-center align-middle
      bg-red-300 bg-opacity-50 pointer-events-none
      group-hover:translate-y-[-400px] transition-all
      "
      >
        <h1 className="opacity-0 transition-all group-hover:opacity-100 delay-300">
          Caption
        </h1>
        <p className="opacity-0 transition-all group-hover:opacity-100 delay-500">
          text text text text
        </p>
      </div>
    </div>
  );
};

export default Image3;
