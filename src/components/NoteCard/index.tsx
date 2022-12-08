import {
  Box,
  Card,
  Flex,
  Grid,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Moment } from "../../models/Moment";
import { FaRegTrashAlt } from "react-icons/fa";

type NoteCardProps = {
  moment: Moment;
  deleteMoment: (moment: Moment) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({ moment, deleteMoment }) => {
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Grid
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
            <Box flexDirection="column" w={{ xl: "100%" }}>
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
              <Grid
                marginTop={4}
                templateColumns="1fr 1fr"
                alignItems="stretch"
                padding={2}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Text>{moment.event_date.toString()}</Text>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton
                    icon={<FaRegTrashAlt />}
                    aria-label="Delete Moment"
                    variant="outline"
                    onClick={() => deleteMoment(moment)}
                  />
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Grid>
  );
};

export default NoteCard;
