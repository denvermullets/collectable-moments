import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const SideBarLinks: React.FC = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          w={{
            sm: "100%",
            xl: "100%",
            "2xl": "95%",
          }}
          py="0px"
          bg={"transparent"}
          ms={0}
        >
          <Flex align="center" justifyContent="space-between" w="100%">
            <HStack mb="6px">
              <Flex w="100%" alignItems="center" justifyContent="center">
                <Icon
                  as={MdHome}
                  width="20px"
                  height="20px"
                  color="inherit"
                  marginEnd={2}
                />

                <Text me="auto">Home</Text>
              </Flex>
            </HStack>
            <AccordionIcon ms="auto" />
          </Flex>
        </AccordionButton>
        <AccordionPanel py="0px">
          <List>
            <NavLink to="/how-it-works">
              <ListItem ms="28px" display="flex" alignItems="center" mb="10px">
                <Icon
                  w="6px"
                  h="6px"
                  me="8px"
                  as={FaCircle}
                  // color={activeIcon}
                />
                <Text fontSize="sm">How it works</Text>
              </ListItem>
            </NavLink>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SideBarLinks;
