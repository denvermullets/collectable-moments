import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  const navbarPosition = "fixed" as const;
  const navbarFilter = "none";
  const navbarBackdrop = "blur(20px)";
  const navbarShadow = "none";
  const navbarBorder = "transparent";
  const paddingX = "15px";
  const gap = "0px";
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={useColorModeValue("rgba(244, 247, 254, 0.2)", "darkMode.900")}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      // display={secondary ? "block" : "flex"}
      display="flex"
      minH="75px"
      // justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      // mx="auto"
      // mt={secondaryMargin}
      pb="8px"
      right={{ sm: "22px", md: "32px", lg: "32px", xl: "36px" }}
      px={{
        sm: paddingX,
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb={gap}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Text variant="navHeader">Collectable Moments</Text>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <ProfileInfo secondary={false} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
