import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axiosMoment from "../../util/axiosConfig";
import { UserContext } from "../../providers/UserContext";

type FormDataTypes = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    email: "",
    password: "",
  });

  const { setCurrentUser } = useContext(UserContext);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const userInfo = await axiosMoment(null).post(`/v1/sign-in`, {
        password: formData.password,
        email: formData.email,
      });

      if (!userInfo) {
        console.error("Unable to login");
      }

      setCurrentUser(userInfo.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      maxW={{ base: "100%", md: "max-content" }}
      w="100%"
      mx={{ base: "auto", lg: "0px" }}
      me="auto"
      h="100%"
      alignItems="start"
      justifyContent="center"
      mb={{ base: "30px", md: "60px" }}
      px={{ base: "25px", md: "0px" }}
      mt={{ base: "40px", md: "14vh" }}
      flexDirection="column"
    >
      <Box me="auto">
        <Heading as="h1" marginBottom="10px" variant="h1">
          Sign In
        </Heading>
        <Text mb="36px" ms="4px">
          Enter your email and password to sign in!
        </Text>
      </Box>
      <Flex
        zIndex="2"
        direction="column"
        w={{ base: "100%", md: "420px" }}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        mx={{ base: "auto", lg: "unset" }}
        me="auto"
        mb={{ base: "20px", md: "auto" }}
      >
        <FormControl>
          <FormLabel ms="4px" fontSize="sm">
            Email*
          </FormLabel>
          <Input
            isRequired={true}
            fontSize="sm"
            type="email"
            placeholder="email@gmail.com"
            mb="24px"
            fontWeight="500"
            size="lg"
            onChange={handleFormChange}
            value={formData.email}
            name="email"
            id="email"
          />
          <FormLabel ms="4px" fontSize="sm">
            Password*
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              fontSize="sm"
              placeholder="Min. 8 characters"
              mb="24px"
              size="lg"
              type={show ? "text" : "password"}
              onChange={handleFormChange}
              value={formData.password}
              name="password"
              id="password"
            />
            <InputRightElement display="flex" alignItems="center" mt="4px">
              <Icon
                _hover={{ cursor: "pointer" }}
                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <Flex justifyContent="space-between" align="center" mb="24px">
            <FormControl display="flex" alignItems="center">
              <Checkbox id="remember-login" me="10px" />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                fontWeight="normal"
                fontSize="sm"
              >
                Keep me logged in
              </FormLabel>
            </FormControl>
            <NavLink to="/auth/forgot-password">
              <Text fontSize="sm" w="124px" variant="navLinks">
                Forgot password?
              </Text>
            </NavLink>
          </Flex>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </FormControl>
        <Flex justifyContent="center" maxW="100%">
          <Text fontSize="sm">
            Not registered yet?
            <NavLink to="/sign-up">
              <Text as="span" variant="navLinks">
                Create an Account
              </Text>
            </NavLink>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
