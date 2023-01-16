import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  FormControl,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import TextField from "../common/TextField";
import axiosMoment from "../../util/axiosConfig";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import { generateDate } from "../../util/helpers";

type MomentCollectorProps = {
  setRefreshTable: (refresh: boolean) => void;
  disabled: boolean;
};

const MomentCollector: React.FC<MomentCollectorProps> = ({
  setRefreshTable,
  disabled,
}) => {
  const [moment, setMoment] = useState<string>("");
  const { currentUser } = useContext<CurrentUserContext>(UserContext);

  const handleSubmit = async () => {
    try {
      const createMoment = await axiosMoment(currentUser?.token).post(
        `/v1/moments`,
        {
          // title: title,
          description: moment,
          event_date: generateDate(),
        }
      );

      if (!createMoment) {
        console.error("Unable to create moment");
      }

      setMoment("");
      // we should just append this to the existing array w/o pulling fresh data
      setRefreshTable(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormControl>
      <Card
        padding={4}
        background={useColorModeValue("white", "darkMode.800")}
        rounded={20}
        marginBottom={4}
        boxShadow={useColorModeValue(
          "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
          "unset"
        )}
      >
        <Text fontSize="xl" fontWeight="bold">
          Moment Collector
        </Text>
        <TextField
          id="moment"
          placeholder="What was your favorite memory from today?"
          momentChange={setMoment}
          momentValue={moment}
          data-cy="moment-input"
        />
        <Button
          variant="brand"
          minW="180px"
          fontSize="sm"
          fontWeight="500"
          ms="auto"
          onClick={handleSubmit}
          disabled={disabled}
          data-cy="moment-submit"
        >
          Save Moment
        </Button>
      </Card>
    </FormControl>
  );
};

export default MomentCollector;
