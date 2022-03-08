import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import CreateIcon from "@material-ui/icons/Create";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SidebarOption from "./SidebarOption";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AddIcon from "@material-ui/icons/Add";
import db from "./FireConf";

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").orderBy('name').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );      
    });
  }, []);

  useEffect(()=>{
    console.log('Channels : ' , channels);
  } , [channels]);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Username </h2>
          <h3>
            <FiberManualRecordIcon />
            FirstName LastName
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Header" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items " />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups " />
      <SidebarOption Icon={AppsIcon} title="Apps " />
      <SidebarOption Icon={FileCopyIcon} title="File Browser " />
      <SidebarOption Icon={ExpandLessIcon} title="Show less " />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels " />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel " />
      {channels.map((channel) => (
        <SidebarOption title={channel.name}  id={channel.id} key={channel.id}/>
      ))}
    </div>
  );
}

export default Sidebar;
