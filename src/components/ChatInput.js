import {Button} from "@mui/material";
import React, {useState} from "react";
import styled from "styled-components";
import {doc, serverTimestamp, collection, addDoc} from "firebase/firestore";
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

function ChatInput({channelName, channelId, chatRef}) {
  // const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault(); // prevents refresh

    if (!channelId) {
      return false;
    }

    const docRef = doc(db, "rooms", channelId);
    const docData = {
      //  message: inputRef.current.value,
      message: input,
      timestamp: serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
      // user: "Jumba Mark",
      // userImage: "",
    };

    const messagesRef = addDoc(collection(docRef, "messages"), docData);
    // setDoc(messagesRef, {merge: true});
    chatRef.current.scrollIntoView({behaviour: "smooth"});

    setInput("");
    console.log(messagesRef.id);
  };

  return (
    <ChatInputContainer>
      <form>
        {/* <input type="text" ref={inputRef} placeholder={`Message #ROOM`} /> */}
        <input
          type="text"
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
