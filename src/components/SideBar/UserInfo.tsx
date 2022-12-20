import React, { useContext } from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import avatar from "../../assets/img/avatar.png";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

const UserInfo: React.FC = () => {
  const { currentUser } = useContext<CurrentUserContext>(UserContext);
  return (
    <Flex
      mt="75px"
      mb="56px"
      justifyContent="center"
      alignItems="center"
      marginLeft={-4}
    >
      <Avatar h="48px" w="48px" src={avatar} me="20px" />
      <Box>
        <Text fontSize="md" fontWeight="700">
          {currentUser ? `@${currentUser.username}` : null}
        </Text>
        <Text fontSize="sm">
          {currentUser ? `@${currentUser.username}` : null}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserInfo;
