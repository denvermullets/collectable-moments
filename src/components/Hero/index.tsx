import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import appImage from "../../assets/img/demo-cm.png";
import { UserContext } from "../../providers/UserContext";

const Hero: React.FC = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <Heading
          mb={6}
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: "normal",
            md: "tight",
          }}
          color="gray.900"
          _dark={{
            color: "gray.100",
          }}
        >
          All of your{" "}
          <Text
            display={{
              base: "block",
              lg: "inline",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, pinkMoment.400, purpleMoment.500)"
            fontWeight="extrabold"
          >
            positive interactions
          </Text>{" "}
          kept in one place wherever you are.
        </Heading>
        <Text
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: "lg",
            md: "xl",
          }}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          Collectable Moments is a daily positive interactions journal that
          focuses on reinforcing that positive mentality. Share your moments
          with a someone daily or send them a link to a monthly board of notes!
        </Text>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mb={{
            base: 4,
            md: 8,
          }}
          spacing={8}
          justifyContent={{
            sm: "left",
            md: "center",
          }}
        >
          <NavLink to={currentUser ? "/" : "/sign-up"}>
            <Button as="a" variant="brand" display="inline-flex">
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </NavLink>
          <NavLink to="/sign-in">
            <Button as="a" display="inline-flex" variant="outline">
              Sign In
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </NavLink>
        </Stack>
      </Box>
      <Box
        w={{
          base: "full",
          md: 10 / 12,
        }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src={appImage}
          alt="Collectable Moments default screenshot"
        />
      </Box>
    </Box>
  );
};

export default Hero;
