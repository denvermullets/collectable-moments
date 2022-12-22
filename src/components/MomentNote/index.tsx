import {
  Box,
  Button,
  Card,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import React from "react";
import { Moment } from "../../models/Moment";

type MomentNoteProps = {
  moment: Moment;
  dateNum: number;
  day: string;
  fullDate: string;
  setSelectedMoment: (moment: Moment) => void;
};

const MomentNote: React.FC<MomentNoteProps> = ({
  moment,
  dateNum,
  day,
  fullDate,
  setSelectedMoment,
}) => {
  const boxNonCurrent = useColorModeValue("peachMoment.50", "darkMode.900");

  return (
    <Card
      rounded={20}
      marginBottom={2}
      background={useColorModeValue("white", "darkMode.800")}
      variant="altCard"
      _hover={{ cursor: "pointer" }}
      onClick={() => setSelectedMoment(moment)}
    >
      <Flex align="center" p="6px" borderRadius="20px">
        <Flex
          me="20px"
          direction="column"
          align="center"
          justify="center"
          w="80px"
          h="80px"
          borderRadius="15px"
          bg={boxNonCurrent}
        >
          <Text mb="2px" fontSize="md" fontWeight="500">
            {day.toUpperCase()}
          </Text>
          <Text lineHeight="100%" fontSize="34px" fontWeight="700">
            {dateNum}
          </Text>
        </Flex>
        <Box>
          <Text fontSize="lg" fontWeight="700" marginBottom={1}>
            {moment.description.length > 64
              ? moment.description.slice(0, 60) + "..."
              : moment.description}
          </Text>
          <Flex align="center">
            <Icon me="8px" as={BsCalendar3} w="16px" h="16px" />
            <Text fontSize="sm" fontWeight="500">
              {fullDate}
            </Text>
          </Flex>
        </Box>
        <Button mt="auto" variant="no-hover" bg="transparent" p="0px" ms="auto">
          <Icon
            as={BsArrowRight}
            color={useColorModeValue("purplehMoment.700", "darkMode.500")}
            w="20px"
            h="20px"
          />
        </Button>
      </Flex>
    </Card>
  );
};

export default MomentNote;
