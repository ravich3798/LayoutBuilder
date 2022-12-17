import Mail from "./images/mail.png";
import Alarm from "./images/alarm.png";
import Movie from "./images/movie.png";
import { useSelector } from "react-redux";
function Comp3() {
  const footer = useSelector((state) => state?.footer);
  const bottomMenu = useSelector((state) => state?.bottomMenu);
  return (
    <div
      style={{
        width: "100%",
        height:"35px",
        backgroundColor: "#737373",
        textAlign:"center"
      }}
    >
      {footer && bottomMenu? <div>
        <span>
        <img src={Mail} style={{ width: "30px", height: "30px" }} />
        <label style={{ color: "white", paddingRight: "40px" }}>MAILS</label>
      </span>
      <span>
        <img src={Alarm} style={{ width: "25px", height: "25px" }} />
        <label style={{ color: "white", paddingRight: "40px" }}>ALARMS</label>
      </span>
      <span>
        <img src={Movie} style={{ width: "30px", height: "30px" }} />
        <label style={{ color: "white", paddingRight: "40px" }}>MOVIES</label>
      </span>
      </div>
      : null}
      
        
      
    </div>
  );
}

export default Comp3;
