import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Comp3 from './Comp3'

function Comp2() {
  const pos=useDispatch();
  const color=useSelector((state) => state?.color);
  const header=useSelector((state) => state?.header);
  const footer=useSelector((state) => state?.footer);
  const drawerLeft=useSelector((state) => state?.drawerLeft);
  const drawerRight=useSelector((state) => state?.drawerRight);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        left: "33%"
      }}
    >
      <div style={{ border: " groove", width: "40%" }}>
        <div style={{ borderBottom: " groove" }}>
          <br />
          <HorizontalLinearStepper></HorizontalLinearStepper>
          <br />
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <div style={{ textAlign: "left" }}>
            <p>I want a Company Logo</p>
            <div>
              <span style={{ paddingRight: "15px" }}>
                <input
                  type="radio"
                  id="left"
                  value="left"
                  name="logoposition" onClick={()=>{
                    pos({type:"logo", payload:'left'})
                  }}
                />
                <label style={{ padding: "5px" }}>Left</label>
              </span>
              <span style={{ paddingRight: "15px" }}>
                <input
                  type="radio"
                  id="right"
                  value="right"
                  name="logoposition" onClick={()=>{
                    pos({type:"logo", payload:'right'})
                  }}
                />
                <label style={{ padding: "5px" }}>Right</label>
              </span>
              <span style={{ paddingRight: "15px" }}>
                <input
                  type="radio"
                  id="center"
                  value="center"
                  name="logoposition" onClick={()=>{
                    pos({type:"logo", payload:'center'})
                  }}
                />
                <label style={{ padding: "5px" }}>Center</label>
              </span>
              <span style={{ paddingRight: "15px" }}>
                <input
                  type="radio"
                  id="disable"
                  value="disable"
                  name="logoposition" onClick={()=>{
                    pos({type:"logo", payload:'disable'})
                  }}
                />
                <label style={{ padding: "5px" }}>Disable</label>
              </span>
            </div>
          </div>
          <br />
          <br />
          <div style={{ textAlign: "left" }}>
            <div>Preset Color</div>
            <br />
            <span style={{ paddingRight: "15px" }}>
              <input
                type="radio"
                name="color"
                style={{ accentColor: "Blue" }} onClick={()=>{
                  pos({type:'color', payload:"#1976d2"})
                }}
              />
              <label>Blue</label>
            </span>
            <span>
              <input type="radio" name="color" style={{ accentColor: "Red" }} onClick={()=>{
                pos({type:'color', payload:"#ff0000"})
              }}/>
              <label>Red</label>
            </span>
            <div>
              <br />
              Preset apply only : Header Background, Button, Radio Button &
              Switch
            </div>
            <br />
            <div>
              <div>
                <Switch defaultChecked style={{color:color}} onChange={(e)=>{
                    pos({type:"header", payload:e.target.checked})
                  }}/>
                <label>I want a Header</label>
              </div>
              <div>
                <Switch defaultChecked style={{color:color}} onChange={(e)=>{
                    pos({type:"footer", payload:e.target.checked})
                  }}/>
                <label>I want a Footer</label>
              </div>
              <div>
                <Switch defaultChecked style={{color:color}} onChange={(e)=>{
                    pos({type:"drawerOverlay", payload:e.target.checked})
                  }}/>
                <label>
                  I want a Drawer Overlay Mode (requires Header or Footer)
                </label>
              </div>
              <div>
                <Switch style={{color:color}} onChange={(e)=>{
                  if(drawerRight){
                    alert("Right-Drawer is already On")
                  }
                  else
                    pos({type:"drawerLeft", payload:e.target.checked})
                  }}/>
                <label>I want a left-side Drawer</label>
              </div>
              <div>
                <Switch  style={{color:color}} onChange={(e)=>{
                    if(drawerLeft){
                      alert("Left-Drawer is already On")
                    }
                    else
                    pos({type:"drawerRight", payload:e.target.checked})
                  }}/>
                <label>I want a right-side Drawer</label>
              </div>
              <div>
                <Switch defaultChecked style={{color:color}} onChange={(e)=>{
                  if(header){
                    pos({type:"navMenu", payload:e.target.checked})
                  }
                  else
                  {
                    pos({type:"navMenu", payload:false})
                    alert("Turn ON header")
                  }
                  
                    
                  }}/>
                <label>I want navigation tabs (requires Header)</label>
              </div>
              <div>
                <Switch defaultChecked style={{color:color}} onChange={(e)=>{
                  if(footer){
                    pos({type:"bottomMenu", payload:e.target.checked})
                  }
                  else
                  {
                    pos({type:"bottomMenu", payload:false})
                    alert("Turn On footer")
                  }
                    
                  }}/>
                <label>I want a Bottom Menu (requires Footer)</label>
              </div>
              <br />
              <br />
              <hr></hr>
              <button
                style={{
                  backgroundColor: color,
                  border: "0",
                  color: "white",
                  width: "100px",
                  height: "30px"
                }}
              >
                CONTINUE
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp2;
