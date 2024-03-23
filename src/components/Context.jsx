import { createContext, useState } from "react";
//create context
export let BgConetxt = createContext();

//provide context
function Context({ children }) {
  let [bgc, setBgc] = useState("bg-white");
  return (
    <BgConetxt.Provider value={{ bgc, setBgc }}>{children}</BgConetxt.Provider>
  );
}

export default Context;
