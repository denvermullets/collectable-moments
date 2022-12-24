import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  Portal,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MomentCollector from "../../components/MomentCollector";
import NoteCard from "../../components/NoteCard";
import Sidebar from "../../components/SideBar";
import { Moment } from "../../models/Moment";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import axiosMoment from "../../util/axiosConfig";
import NavBar from "../../components/NavBar";
import MomentNote from "../../components/MomentNote";
import dayjs from "dayjs";

const LandingPage: React.FC = () => {
  const [collectedMoments, setCollectedMoments] = useState<Moment[]>([]);
  const [refreshTable, setRefreshTable] = useState<boolean>(true);
  const { currentUser } = useContext<CurrentUserContext>(UserContext);
  const [selectedMoment, setSelectedMoment] = useState<Moment>(null);

  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const momentToday = collectedMoments.filter(
    (moment: Moment) => moment.event_date.toString() === today
  );

  useEffect(() => {
    const loadMoments = async () => {
      try {
        const moments = await axiosMoment(currentUser?.token)("/v1/moments");

        if (!moments) {
          return;
        }

        setCollectedMoments(moments.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (refreshTable && currentUser) {
      loadMoments();
      setRefreshTable(false);
    }
  }, [refreshTable, currentUser]);

  const deleteMoment = async (moment: Moment) => {
    try {
      const delMoment = await axiosMoment(currentUser?.token).delete(
        `/v1/moments/${moment.id}`
      );

      if (!delMoment) {
        console.log("something went wrong");
        return;
      }

      const removeMoment = collectedMoments.filter(
        (oldMoment: Moment) => oldMoment.id !== moment.id
      );
      setCollectedMoments(removeMoment);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      {/* <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      > */}
      <Sidebar moments={collectedMoments} />
      <Box
        pt={{ base: "130px", md: "80px", xl: "80px" }}
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <NavBar />
        </Portal>
        <Box p={{ base: "20px", md: "30px" }} minH="100vh">
          <Box>
            <MomentCollector
              setRefreshTable={setRefreshTable}
              disabled={momentToday.length > 0}
            />

            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Card
                background={useColorModeValue("white", "darkMode.800")}
                rounded={20}
                padding={4}
                boxShadow={useColorModeValue(
                  "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
                  "unset"
                )}
              >
                <Text fontSize="2xl" fontWeight="700">
                  Timeline
                </Text>
                <Text fontSize="md" fontWeight="500" mb="30px">
                  All of your moments:
                </Text>

                {collectedMoments.length
                  ? collectedMoments.map((moment: Moment) => (
                      <MomentNote
                        key={moment.id}
                        moment={moment}
                        day={dayjs(moment.event_date).format("ddd")}
                        dateNum={dayjs(moment.event_date).date()}
                        fullDate={dayjs(moment.event_date).format(
                          "dddd, MMMM D, YYYY"
                        )}
                        setSelectedMoment={setSelectedMoment}
                      />
                    ))
                  : null}
              </Card>
              <Card
                background={useColorModeValue("white", "darkMode.800")}
                rounded={20}
                padding={4}
                boxShadow={useColorModeValue(
                  "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
                  "unset"
                )}
              >
                <NoteCard moment={selectedMoment} deleteMoment={deleteMoment} />
              </Card>
            </Grid>
          </Box>
        </Box>
        <Box>{/* <Footer /> */}</Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
