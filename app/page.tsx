import NavBar from "@/components/navBar";
export default function Home() {
  return (
    <>
      <NavBar/>      
    <div >
      <div className="flex text-white flex-col items-start bg-primary 
        h-1/2  w-full p-4 ">
        <h1 className=" font-ro  text-2xl ">Infolib Technology offers <br/>the best </h1>
        <p className=" text-xs pt-4 pl-4">Cyber security,network security and End to End It services</p>
        <button className="flex items-start  h-fit w-fit px-6 py-2 text-md
        bg-lightBlue rounded-lg mt-4 mb-4  shadow-xl">Reach Us </button>
        <div className="flex justify-center items-center mt-4">
          <div className="relative">
            <img className="relative left-[14vh] top-24  animate-pulse  w-6 flex" 
            src="sliderHome.png"
            />
            <img className="relative left-10 top-8 animate-pulse  w-6 flex" 
            src="sliderHome.png"
            />
            
          </div>
        <img src="home1.png" className="w-3/5 justify-center "/>
        </div>
      </div>
    </div>
    </>
  )
}
