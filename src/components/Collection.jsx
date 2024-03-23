
function Collection({ path, name, btn }) {
  return (
    <div className="shadow-2xl bg-slate-300">
      <img src={path} alt="img" className="h-96 w-80 mx-auto" />
      <hr className="border-dotted border-black my-4" />
      <p className="font-bold text-center my-4">{name}</p>
      <p className="text-center my-4">Oct 15 | Sun | 4:30 PM</p>
      <p className="text-center my-4">
        Las Vegas Ballpark, Las Vegas, Nevada Take Flight Collection
      </p>
      <div className="text-center my-4">
        <button className="bg-black w-full shadow-2xl text-white p-2">{btn}</button>
      </div>
    </div>
  );
}

export default Collection;
