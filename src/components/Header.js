import {Avatar} from "@mui/material";
import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {HelpOutline, Search} from "@mui/icons-material";

function Header() {
  return (
    // Header
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO: Add onClick
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search Prime Greeks" />
      </HeaderSearch>

      {/* Header right */}
      <HeaderRight>
        {/* Help icon */}
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

// Header component
const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

// Header Left
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

// styled avatar
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

// Header middle
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    outline: 0;
    text-align: center;
    min-width: 30vw;
    color: white;
  }
`;

// Header right
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end; /* stick to the right */

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
