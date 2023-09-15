import Image from "next/image"


const Image4 = () => {
  return (
    <div className="m-20 relative w-fit group overflow-hidden">
      <Image src="/me.png" alt="" height={1000} width={1000}
      className="w-[400px] h-[400px] object-cover"
      />
      <div className="transition duration-500 absolute w-[400px] h-[400px] bg-black bg-opacity-50
      origin-top-left  group-hover:-rotate-90"/>
      <h1 className="absolute w-[400px] bg-green-400 text-center top-10 -right-[400px]
      transition-all delay-[400ms]  group-hover:right-0
      ">Caption</h1>
      <p className="absolute w-[400px] bg-blue-400 text-center -bottom-[50px]
      group-hover:bottom-[200px] transition-all delay-[600ms]
      ">text text text text texttext text text text text
      text text text text text</p>
      <button className="absolute w-[400px] bg-yellow-400 rounded-lg py-2 text-white tracking-[3px] -left-[400px] bottom-10
      group-hover:left-0 transition-all delay-[800ms]
      ">CLICK</button>
    </div>
  )
}

export default Image4
