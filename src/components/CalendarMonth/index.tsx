import React from "react";
import { Card, Icon } from "@chakra-ui/react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MiniCalendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Moment } from "../../models/Moment";
import dayjs from "dayjs";

type CalendarMonthProps = {
  moments: Moment[];
};

const CalendarMonth: React.FC<CalendarMonthProps> = ({ moments }) => {
  const tileClassName = ({ date }) => {
    const today = moments.filter((moment) =>
      dayjs(date).isSame(moment.event_date, "day")
    );
    if (today.length) {
      return "react-calendar__tile--range";
    }
  };

  return (
    <Card
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      background={"white"}
      rounded={20}
    >
      <Calendar
        // onChange={onChange}
        selectRange={false}
        view={"month"}
        tileClassName={tileClassName}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Card>
  );
};

export default CalendarMonth;
