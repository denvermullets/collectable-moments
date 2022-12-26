import React, { useContext } from "react";
import { Avatar, Box, Flex, GridItem, Text } from "@chakra-ui/react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type UserInfoProps = {
  momentCount: number;
};

const UserInfo: React.FC<UserInfoProps> = ({ momentCount }) => {
  const { currentUser } = useContext<CurrentUserContext>(UserContext);
  return (
    <Flex marginTop={8} marginBottom={8} marginLeft={8}>
      <GridItem>
        <Avatar
          h="48px"
          w="48px"
          src={null}
          me={4}
          name={currentUser?.username}
        />
      </GridItem>
      <GridItem>
        <Box>
          <Text fontSize="md" fontWeight="700">
            {currentUser ? `@${currentUser.username}` : null}
          </Text>
          <Text fontSize="sm">
            {currentUser ? `${momentCount + " Moments shared"}` : null}
          </Text>
        </Box>
      </GridItem>
    </Flex>
  );
};

export default UserInfo;
