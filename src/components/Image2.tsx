import Image from "next/image"


const Image2 = () => {
  return (
    <div className="m-20 relative w-fit group overflow-hidden">
      <Image src="/me.png" alt="" height={1000} width={1000}
      className="w-[400px] h-[400px] object-cover"
      />
      <div className="absolute transition-all pointer-events-none w-[400px] h-[100px] bg-red-200 bottom-[-100px] group-hover:bottom-0
      flex flex-col justify-center items-center text-center p-10 space-y-10
      ">
        <h1>Sample Caption</h1>
        <p>banana abanana banana naban aabav</p>
      </div>
    </div>
  )
}

export default Image2
