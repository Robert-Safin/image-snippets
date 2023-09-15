import Image from "next/image"


const Image5 = () => {
  return (
    <div className="m-20 relative w-fit group">
      <Image src="/me.png" alt="" height={1000} width={1000}
      className="w-[400px] h-[400px] object-cover
      transition
      group-hover:scale-0 delay-300 duration-500
      "
      />
      <div className="transition absolute w-[400px] h-[400px] bg-black bg-opacity-50 top-0 scale-0
        group-hover:scale-100 delay-300 duration-500
        justify-center items-center flex
      ">
        <h1>Hi mum!</h1>
      </div>

    </div>
  )
}

export default Image5
