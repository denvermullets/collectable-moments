import { Box } from "@chakra-ui/react";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        // bg={sidebarBg}
        // transition={variantChange}
        w="285px"
        ms={{
          sm: "16px",
        }}
        my={{
          sm: "16px",
        }}
        h="calc(100vh - 32px)"
        // m={sidebarMargins}
        // borderRadius={sidebarRadius}
        minH="100%"
        overflowX="hidden"
        // boxShadow={shadow}
      >
        {/* <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <Content routes={routes} />
        </Scrollbars> */}
        content / / scrollbars
      </Box>
    </Box>
  );
};

export default SideBar;
