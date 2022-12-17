import React, { useContext, useEffect, useState } from "react";
import { Box, Portal } from "@chakra-ui/react";
import MomentCollector from "../../components/MomentCollector";
import NoteCard from "../../components/NoteCard";
import Sidebar from "../../components/SideBar";
import { Moment } from "../../models/Moment";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import axiosMoment from "../../util/axiosConfig";
import NavBar from "../../components/NavBar";

const LandingPage: React.FC = () => {
  const [collectedMoments, setCollectedMoments] = useState<Moment[]>([]);
  const [refreshTable, setRefreshTable] = useState<boolean>(true);
  const { currentUser } = useContext<CurrentUserContext>(UserContext);

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
            <MomentCollector setRefreshTable={setRefreshTable} />

            {collectedMoments.length
              ? collectedMoments.map((moment: Moment) => (
                  <NoteCard
                    key={moment.id}
                    moment={moment}
                    deleteMoment={deleteMoment}
                  />
                ))
              : null}
          </Box>
        </Box>
        <Box>{/* <Footer /> */}</Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
