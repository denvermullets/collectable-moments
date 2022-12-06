import React, { useState } from "react";
import {
  Button,
  Card,
  Flex,
  FormControl,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import TextField from "../common/TextField";
import axios from "axios";

type MomentCollectorProps = {
  setRefreshTable: (refresh: boolean) => void;
};

const MomentCollector: React.FC<MomentCollectorProps> = ({
  setRefreshTable,
}) => {
  const [moment, setMoment] = useState<string>("");
  const textColorPrimary = useColorModeValue("purpleMoment.800", "white");

  const generateDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async () => {
    try {
      const createMoment = await axios.post(
        `http://localhost:3001/api/v1/moments`,
        {
          // title: title,
          description: moment,
          event_date: generateDate(),
        }
      );

      if (!createMoment) {
        console.log("something went wrong when creating a Moment");
        throw Error("Unable to create moment");
      }

      setMoment("");
      setRefreshTable(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl>
      <Card padding={4} background="white" rounded={20}>
        <Flex direction="column">
          <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
            Moment Collector
          </Text>
          {/* <Text fontSize="md" color={textColorSecondary}>
            Save your favorite memory from today!
          </Text> */}
        </Flex>
        <TextField
          id="moment"
          // label="What was your favorite memory from today?"
          // h="100px"
          placeholder="What was your favorite memory from today?"
          momentChange={setMoment}
          momentValue={moment}
        />
        <Button
          variant="brand"
          minW="183px"
          fontSize="sm"
          fontWeight="500"
          ms="auto"
          onClick={handleSubmit}
        >
          Save Moment
        </Button>
      </Card>
    </FormControl>
  );
};

export default MomentCollector;
