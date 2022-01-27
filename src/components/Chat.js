import {InfoOutlined, StarBorderOutlined} from "@mui/icons-material";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectRoomId} from "../features/appSlice";
import ChatInput from "./ChatInput";
import {db} from "../firebase";
import {doc, orderBy, collection, query} from "firebase/firestore";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import Message from "./Message";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const chatRef = useRef(null);

  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  const [roomMessages, loading] = useCollection(
    roomId && query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "asc"))
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({behavior: "smooth"});
  }, [roomId, loading]);

  // console.log(roomDetails?.data());
  // console.log(roomMessages);

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomDetails?.data().name}</strong>
          </h4>
          <StarBorderOutlined />
        </HeaderLeft>

        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>

      <ChatMessages>
        {roomMessages?.docs.map((doc) => {
          const {message, timestamp, user, userImage} = doc.data();

          return (
            <Message
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}

        <ChatBottom ref={chatRef} />
      </ChatMessages>

      <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
