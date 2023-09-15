import Image from "next/image"


const Image6 = () => {
  return (
    <div className="m-20 relative w-fit group overflow-hidden">
      <Image src="/me.png" alt="" height={1000} width={1000}
      className="w-[400px] h-[400px] object-cover
      transition

      "
      />
      <div className="transition absolute w-[400px] h-[400px] bg-black bg-opacity-50 top-0
        scale-[10] opacity-0
        group-hover:scale-100 group-hover:opacity-100
        delay-300 duration-500
        justify-center items-center flex
      ">
        <h1 className="text-white">Hi mum!</h1>
      </div>

    </div>
  )
}

export default Image6
