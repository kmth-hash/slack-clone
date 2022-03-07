import React from "react";
import "./SidebarOption.css";
import {  useNavigate} from 'react-router-dom';
import db from "./FireConf";

function SidebarOption({ Icon, title , id , addChannelOption }) {
  const history = useNavigate();
  
  const selectChannel = ()=> {
    console.log(addChannelOption);
    if(id) {
      console.log(id);
      history.push(`/room/$(id)`);
    }
    else{
      console.log(id);
      history.push('/title/');
    }
  }

  const addChannel = () => {
    const channelName = prompt("Enter channel name : ");
    if(channelName)
    {
      db.collection('rooms').add({
        name : channelName ,
      })
    }
  }

  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
