import React from "react";

import styled from "styled-components/native";
import Header from "./component/Header";
import Avatar from "./component/Avatar";
import InputContainer from "./component/InputContainer";
import Card from "./component/Card";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const SmartContainer = styled.View`
  width: 100%;
  padding-horizontal: 10px;
  flex-direction: row;
`;
const DATA = [
  {
    id: "1",
    userAvatar: require("./assets/avatar2.png"),
    userName: "User 1",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post1.png"),
  },
  {
    id: "2",
    userAvatar: require("./assets/avatar4.png"),
    userName: "User 2",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post2.png"),
  },
  {
    id: "3",
    userAvatar: require("./assets/avatar3.png"),
    userName: "User 3",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/splash.png"),
  },
  {
    id: "4",
    userAvatar: require("./assets/avatar4.png"),
    userName: "User 4",
    postText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    postImage: require("./assets/post4.png"),
  },
];

export default function App() {
  return (
    <Container>
      <Header headerTitle="social" />
      <SmartContainer>
        <Avatar imageSource={require("./assets/avatar1.png")} />
        <InputContainer />
      </SmartContainer>
      <Card data={DATA} />
    </Container>
  );
}
