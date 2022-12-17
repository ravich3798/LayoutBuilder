import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import { useSelector } from "react-redux";
export default function App() {
  const footer = useSelector((state) => state?.footer);
  //console.log(selector)
  return (
    <div className="App">
      <Comp1></Comp1>
      <Comp2></Comp2>
      {footer?<Comp3></Comp3>:null}
      
    </div>
  );
}
