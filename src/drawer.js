import { useState } from "react";
import Drawericon from "./images/drawer.png";
import close from "./images/close.png";
import { useSelector } from "react-redux";

function Drawer() {
  const [drawerstate, setDrawerstate] = useState(false);
  const drawerRight=useSelector((state) => state?.drawerRight);
  const drawerLeft=useSelector((state) => state?.drawerLeft);
  return (
    <div>
      {drawerstate && drawerRight ? (
        <div
          style={{
            position:"absolute",
            right:drawerRight ? "0px" : "",
            width: "25%",
            height: "680px",
            textAlign: "left",
            backgroundColor: "blue",
            color: "white",
            paddingLeft: "20px",
            overflow: "hidden",
            zIndex: "100"
          }}
        >
          <img
            src={close}
            alt="closeIcon"
            style={{ width: "20px", float: "right", padding: "20px" }}
            onClick={() => {
              setDrawerstate(false);
            }}
          />
          <div style={{ paddingTop: "70px" }}>Menu Item1</div>
          <div style={{ paddingTop: "10px" }}>Menu Item2</div>
          <div style={{ paddingTop: "10px" }}>Menu Item3</div>
          <div></div>
        </div>
      ) : (
        ""
      )}
      {drawerstate && drawerLeft ? (
        <div
          style={{
            position:"absolute",
            left:drawerLeft ? "0px" : "",
            width: "25%",
            height: "680px",
            textAlign: "left",
            backgroundColor: "blue",
            color: "white",
            paddingLeft: "20px",
            overflow: "hidden",
            zIndex: "100"
          }}
        >
          <img
            src={close}
            alt="closeIcon"
            style={{ width: "20px", float: "right", padding: "20px" }}
            onClick={() => {
              setDrawerstate(false);
            }}
          />
          <div style={{ paddingTop: "70px" }}>Menu Item1</div>
          <div style={{ paddingTop: "10px" }}>Menu Item2</div>
          <div style={{ paddingTop: "10px" }}>Menu Item3</div>
          <div></div>
        </div>
      ) : (
        ""
      )}
      <div
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          setDrawerstate(true);
        }}
      >
        <img
          src={Drawericon}
          style={{
            width: "25px",
            float: "left",
            paddingTop: "20px"
          }}
          alt="navIcon"
        />
      </div>
    </div>
  );
}
export default Drawer;