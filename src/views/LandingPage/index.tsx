import React, { useContext, useEffect, useState } from "react";
import { Box, Portal, SimpleGrid } from "@chakra-ui/react";
import MomentCollector from "../../components/MomentCollector";
import NoteCard from "../../components/NoteCard";
import Sidebar from "../../components/SideBar";
import { Moment } from "../../models/Moment";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";
import axiosMoment from "../../util/axiosConfig";

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
          <Box>
            {/* <Navbar
                onOpen={onOpen}
                logoText={"Horizon UI Dashboard PRO"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                fixed={fixed}
                {...rest}
              /> */}
            navbar goes here
          </Box>
        </Portal>
        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH="100vh"
          pt="50px"
        >
          <Box pt={{ base: 5 }}>
            <SimpleGrid
              mb="20px"
              columns={{ sm: 1, lg: 1 }}
              spacing={{ base: "20px", xl: "20px" }}
            >
              <MomentCollector setRefreshTable={setRefreshTable} />
            </SimpleGrid>
          </Box>
          <Box>
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
