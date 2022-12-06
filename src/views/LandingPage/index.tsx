import { Box, Portal, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MomentCollector from "../../components/MomentCollector";
import NoteCard from "../../components/NoteCard";
import { Moment } from "../../models/Moment";

const LandingPage: React.FC = () => {
  const [collectedMoments, setCollectedMoments] = useState<Moment[]>([]);
  const [refreshTable, setRefreshTable] = useState<boolean>(true);

  useEffect(() => {
    const loadMoments = async () => {
      try {
        const moments = await axios("http://localhost:3001/api/v1/moments");

        if (!moments) {
          return;
        }

        setCollectedMoments(moments.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (refreshTable) {
      loadMoments();
      setRefreshTable(false);
    }
  }, [refreshTable]);

  return (
    <Box>
      {/* <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      > */}
      sidebar
      {/* <Sidebar routes={routes} display="none" {...rest} /> */}
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
        {/* {getRoute() ? ( */}
        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH="100vh"
          pt="50px"
        >
          {/* <Box pt={{ base: "130px", md: "80px", xl: "80px" }}> */}
          <Box pt={{ base: 5 }}>
            <SimpleGrid
              mb="20px"
              columns={{ sm: 1, lg: 2 }}
              spacing={{ base: "20px", xl: "20px" }}
            >
              <MomentCollector setRefreshTable={setRefreshTable} />
            </SimpleGrid>
          </Box>
          {collectedMoments.length
            ? collectedMoments.map((moment: Moment) => (
                <NoteCard key={moment.id} moment={moment} />
              ))
            : null}

          {/* <Switch>
                {getRoutes(routes)}
                <Redirect from="/" to="/admin/dashboards/default" />
              </Switch> */}
        </Box>
        {/* ) : null} */}
        <Box>{/* <Footer /> */}</Box>
      </Box>
    </Box>
  );
};

export default LandingPage;