import React from "react";
import { Flex } from "@chakra-ui/react";

const HSeparator = () => {
  return <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)" />;
};

const VSeparator = () => {
  return <Flex w="1px" bg="rgba(135, 140, 189, 0.3)" />;
};

export { HSeparator, VSeparator };
