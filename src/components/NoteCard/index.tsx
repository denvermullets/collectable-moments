import { Box, Flex, Grid, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Moment } from "../../models/Moment";
import { FaRegTrashAlt } from "react-icons/fa";

type NoteCardProps = {
  moment: Moment;
  deleteMoment: (moment: Moment) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({ moment, deleteMoment }) => {
  return (
    <Grid display={{ base: "block", lg: "grid" }} width="100%">
      <Flex display={{ base: "block", lg: "flex" }} width="100%">
        <Flex
          direction={{ base: "column", md: "column", xl: "row" }}
          width="100%"
        >
          <Box flexDirection="column" width="100%">
            <Text
              fontSize={{
                base: "xl",
                md: "xl",
                xl: "xl",
                "2xl": "28px",
              }}
              mb="10px"
              fontWeight="700"
            >
              {moment?.title && moment.title}
            </Text>
            <Text
              fontSize={{
                base: "md",
              }}
              fontWeight="400"
              me="14px"
              style={{ whiteSpace: "pre-line" }}
            >
              {moment?.description && moment.description}
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
                <Text>
                  {moment?.event_date && moment.event_date.toString()}
                </Text>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                {moment && (
                  <IconButton
                    icon={<FaRegTrashAlt />}
                    aria-label="Delete Moment"
                    variant="outline"
                    onClick={() => deleteMoment(moment)}
                  />
                )}
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default NoteCard;
