import React from "react";
import styled from "styled-components";
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {enterRoom} from "../features/appSlice";

function SidebarOption({Icon, title, addChannelOption, id}) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name: ");

    if (channelName) {
      const channelRef = addDoc(collection(db, "rooms"), {
        name: channelName,
      });
      console.log("Document written with ID: ", channelRef.id);
    }
  };

  const selectChannel = () => {
    // If an id is passed in as a prop dispatch enterRoom in the global store;
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {/* If you passed in an icon then render it */}
      {Icon && <Icon fontSize="small" style={{padding: 10}} />}{" "}
      {/* If icon is truthy render the h3 otherwise render SidebarOptionChannel*/}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    background-color: #340e36;
    opacity: 0.9;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
