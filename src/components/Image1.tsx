import Image from "next/image"


const Image1 = () => {
  return (
    <div className="m-20 relative w-fit group overflow-hidden">
      <Image src="/me.png" alt="" height={1000} width={1000}
      className="w-[400px] h-[400px] object-cover group-hover:translate-x-[-400px] transition-all"
      />
      <div className="absolute transition-all pointer-events-none w-[400px] h-[400px] bg-red-200 top-0 left-[400px] group-hover:left-0
      flex flex-col justify-center items-center text-center p-10 space-y-20
      ">
        <h1>Sample Caption</h1>
        <p>banana abanana banana naban aabav</p>
      </div>
    </div>
  )
}

export default Image1
