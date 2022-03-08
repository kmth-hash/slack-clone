import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./FireConf";
import Message from './Message';

function Chat() {
  const { roomID } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
    }

    db.collection("rooms")
      .doc(roomID)
      .collection("messages")
      .orderBy("timeStamp")
      .onSnapshot((snapshot) => 
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomID]);

  console.log(roomDetails);
  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_header_left">
          <h4 className="chat_channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_header_right">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
      {roomMessages.map(({ message, timeStamp, username, userImage }) => (
          <Message
            message={message}
            timestamp={timeStamp}
            user={username}
            userImage={userImage}
            key = {roomID}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
