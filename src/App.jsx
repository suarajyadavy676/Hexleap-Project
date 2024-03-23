import sports from "../sports.json";
import SportsCard from "./components/SportsCard";
import Collection from "./components/Collection";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useContext} from "react";
import { BgConetxt } from "./components/Context";

function App() {
  const {setBgc,bgc} = useContext(BgConetxt)
  const sportsData = sports.data;
  // console.log(sportsData)
  let adData = {
    path: "/public/img5.jpg",
    name: "Advertisement title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ad: "ad",
  };
  const collections = [
    {
      id: 1,
      path: "/public/img6.jpg",
      name: "Las Vegas Aviators",
      btn: "Take Flight Collection",
    },
    {
      id: 2,
      path: "/public/img7.jpg",
      name: "Sacramento River Cats",
      btn: "Orange Collection",
    },
    {
      id: 3,
      path: "/public/img6.jpg",
      name: "Las Vegas Aviators",
      btn: "Take Flight Collection",
    },
  ];
  return (
    <>
      <div className={`w-full h-full ${bgc} p-6`}>
        <div className="text-right bg-none">
          <select name="" id="" className="bg-none border-none" onChange={(e)=>setBgc(e.target.value)}>
            <option value="bg-white">Light Mode</option>
            <option value="bg-black">Dark Mode</option>
          </select>
        </div>

        <h1 className={`w-5/6 mx-auto font-bold text-2xl my-8 underline-offset-4 decoration-blue-600 ${bgc=='bg-black'? 'text-white':'text-black' }`}>
          Sports
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-5/6 mx-auto">
          {sportsData.map((data) => (
            <SportsCard data={data} key={data.id} />
          ))}

          <div className="shadow-xl mx-auto text-center bg-slate-300">
            <div className="relative">
              <button className="bg-black text-white p-2 absolute right-3">
                {adData.ad}
              </button>
              <img
                src={adData.path}
                alt="image"
                className="my-2 h-52 mx-auto w-90"
              />
            </div>
            <h1 className="font-bold">{adData.name}</h1>
            <div className=" mx-auto my-2 p-2">
              <p className="text-sm">{adData.content}</p>
            </div>
          </div>
        </div>
        <div className="text-center my-8">
          <button className="bg-blue-500 text-white p-2">See More</button>
        </div>
        <h1 className={`font-bold text-4xl text-center ${bgc=='bg-black'? 'text-white':'text-black' }`}>Collection Spotlight</h1>
        <p className={`w-3/4 my-4 mx-auto text-center ${bgc=='bg-black'? 'text-white':'text-black' }`}>
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>

        <div className="relative">
          <button className="absolute text-4xl top-[50%] sm:ml-14 text-blue-600 border-blue-600 border-2 py-2 px-1">
            <GrFormPrevious />
          </button>
          <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {collections.map((data) => (
              <Collection {...data} key={data.id} />
            ))}
          </div>
          <button className="absolute right-4 top-[50%] text-4xl sm:mr-14 text-blue-600  border-blue-600 border-2 py-2 px-1">
            <MdOutlineNavigateNext />
          </button>
        </div>

        {/* <Carousels /> */}
      </div>
    </>
  );
}

export default App;
