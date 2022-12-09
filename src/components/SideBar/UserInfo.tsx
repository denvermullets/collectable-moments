import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import avatar from "../../assets/img/avatar.png";

const UserInfo: React.FC = () => {
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
          @denvermullets
        </Text>
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="400">
          Jason Smith
        </Text>
      </Box>
    </Flex>
  );
};

export default UserInfo;
