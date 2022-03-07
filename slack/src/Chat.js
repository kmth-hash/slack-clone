import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
function Chat() {
  const { roomID } = useParams();

  return (
    <div className="chat">
      <h3>Chat room : {roomID} </h3>
      <div className="chat_header">
        <div className="chat_header_left">
          <h4 className="chat_channelName">
            <strong>General</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_header_right">
            <p>
                <InfoOutlinedIcon/>Details
            </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
