function SportsCard({data}) {
  // console.log(data)
  const {path,name,events,sport} = data
  return (
    <div className="shadow-xl mx-auto text-center bg-slate-300">
      <img src={path} alt="image" className="my-2 h-72 mx-auto w-90" />
      <h1 className="font-bold">{name}</h1>
      <div className="flex shadow-lg bg-slate-100 w-6/7 mx-auto my-2 justify-between p-2">
        <div className="my-2">
          <p>Total Events</p>
          <p className="font-bold">{events} Events</p>
        </div>
        <div className="my-2">
          <p>Sport</p>
          <p className="font-bold">{sport}</p>
        </div>
      </div>
    </div>
  );
}

export default SportsCard;
