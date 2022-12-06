import {
  Box,
  Card,
  Flex,
  Grid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Moment } from "../../models/Moment";

type NoteCardProps = {
  moment: Moment;
};

const NoteCard: React.FC<NoteCardProps> = ({ moment }) => {
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Grid
      // pt={{ base: "130px", md: "80px", xl: "80px" }}
      gridTemplateColumns={{ md: "2.15fr 1fr", xl: "2.95fr 1fr" }}
      display={{ base: "block", lg: "grid" }}
      marginBottom={5}
    >
      <Flex display={{ base: "block", lg: "flex" }}>
        <Card
          p="20px"
          h="max-content"
          minH={{ md: "450px", xl: "auto" }}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            position: "relative",
            borderRadius: "20px",
            minWidth: "0px",
            wordWrap: "break-word",
            background: useColorModeValue("#ffffff", "navy.800"),
            boxShadow: useColorModeValue(
              "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
              "unset"
            ),
            backgroundClip: "border-box",
          }}
        >
          <Flex direction={{ base: "column", md: "column", xl: "row" }}>
            <Box flexDirection="column" w={{ xl: "68%" }} mb="25px">
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "xl",
                  xl: "xl",
                  "2xl": "28px",
                }}
                mb="10px"
                fontWeight="700"
              >
                Title: {moment.title}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: "md",
                }}
                fontWeight="400"
                me="14px"
                style={{ whiteSpace: "pre-line" }}
              >
                {moment.description}
              </Text>
              <Spacer />
            </Box>
            <Spacer />
            <Box>
              <Text
                ms="auto"
                mt="10px"
                color="secondaryGray.600"
                fontSize={{
                  base: "md",
                }}
                fontWeight="500"
              >
                {moment.event_date.toString()}
              </Text>
            </Box>
          </Flex>
        </Card>

        {/* <VSeparator mx="30px" h="100%" /> */}
      </Flex>
    </Grid>
  );
};

export default NoteCard;
