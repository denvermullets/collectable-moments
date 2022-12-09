import React from "react";
import { Box, Flex, useColorModeValue, Text, Stack } from "@chakra-ui/react";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  const variantChange = "0.2s linear";
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  const sidebarBg = useColorModeValue("white", "navy.800");
  const sidebarRadius = "30px";

  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="270px"
        ms={{
          sm: "16px",
        }}
        my={{
          sm: "16px",
        }}
        h="calc(100vh - 32px)"
        borderRadius={sidebarRadius}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
          <Text>Brand</Text>
          <Stack direction="column" mb="auto" mt="8px">
            <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
              <Text>links</Text>
            </Box>
          </Stack>

          <Box
            ps="20px"
            pe={{ md: "16px", "2xl": "0px" }}
            mt="60px"
            borderRadius="30px"
          >
            content?
            {/* <SidebarCard /> */}
          </Box>
          <UserInfo />
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
