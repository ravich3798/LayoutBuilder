import React from "react";
import logo from "./images/logo.png";
import Comp2 from "./Comp2.js";
import Drawer from "./drawer"
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

function Comp1() {
  const logopos=useSelector((state) => state?.logo);
  const color=useSelector((state) => state?.color);
  const header=useSelector((state) => state?.header);
  const drawerLeft=useSelector((state) => state?.drawerLeft);
  const drawerRight=useSelector((state) => state?.drawerRight);
  const navMenu=useSelector((state) => state?.navMenu);
  console.log("logo",logopos);
  return (
    <div style={{  paddingLeft: "10px", width:"99%", height:"120px", backgroundColor: color, display: header?'':'none'}}>
      <Stack spacing={3}>
      <Grid container><Grid item sm={1}>{drawerLeft?<Drawer></Drawer>:null}</Grid>
      <Grid item sm={9}><div style={{ textAlign:logopos, display:logopos=="disable"?'none' : ''}}>
        <img src={logo} alt="Tigeen Computing" />
      </div></Grid>
      <Grid item sm={2}><Stack direction='row'
              spacing={2}
              alignItems='center'
              justifyContent='right'>{drawerRight?<Drawer ></Drawer>:null}</Stack></Grid></Grid>
      <Stack>
      {header && navMenu ? <div style={{ float: "left" }}>
        <button style={{border:"none", background:color, borderBottom:"2px solid white", color:"white"}}>TAB ONE</button>
        <button style={{border:"none", background:color, color:"white"}}>TAB TWO</button>
        <button style={{border:"none", background:color, color:"white"}}>TAB THREE</button>
      </div> : null}
      
      </Stack>
      </Stack>
    {/* <div > */}
    
      
      
      <br />
      <br />
    </div>
    
  );
}

export default Comp1;
