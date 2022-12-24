import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
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

type FormDataErrorsTypes = {
  email: boolean;
  password: boolean;
};

const SignIn: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormDataErrorsTypes>({
    email: false,
    password: false,
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const { setCurrentUser, setRememberUser } = useContext(UserContext);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    setFormErrors({
      email: !formData.email || formData.email === "",
      password: !formData.password || formData.password === "",
    });
  };

  const handleSubmit = async () => {
    validateForm();

    if (
      !formData.email ||
      formData.email === "" ||
      !formData.password ||
      formData.password === ""
    ) {
      return;
    }

    try {
      const userInfo = await axiosMoment(null).post(`/v1/sign-in`, {
        password: formData.password,
        email: formData.email,
      });

      if (!userInfo) {
        console.error("Unable to login");
      }

      setRememberUser(rememberMe);
      setCurrentUser(userInfo.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setFormErrors({
        email: true,
        password: true,
      });
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
        <FormControl isInvalid={formErrors.email || formErrors.password}>
          <FormLabel ms="4px" fontSize="sm">
            Email*
          </FormLabel>
          <Input
            variant="authInput"
            isRequired={true}
            fontSize="sm"
            type="email"
            placeholder="email@gmail.com"
            mb={formErrors.email ? 0 : 8}
            fontWeight="500"
            size="lg"
            onChange={handleFormChange}
            value={formData.email}
            name="email"
            id="email"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          {formErrors.email && (
            <FormErrorMessage marginBottom={6}>Invalid email</FormErrorMessage>
          )}
          <FormLabel ms="4px" fontSize="sm">
            Password*
          </FormLabel>
          <InputGroup size="md">
            <Input
              isRequired={true}
              variant="authInput"
              fontSize="sm"
              placeholder="Min. 8 characters"
              mb={formErrors.password ? 0 : 8}
              size="lg"
              type={show ? "text" : "password"}
              onChange={handleFormChange}
              value={formData.password}
              name="password"
              id="password"
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <InputRightElement display="flex" alignItems="center" mt="4px">
              <Icon
                _hover={{ cursor: "pointer" }}
                as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          {formErrors.password && (
            <FormErrorMessage marginBottom={6}>
              Invalid password
            </FormErrorMessage>
          )}
          <Flex justifyContent="space-between" align="center" mb="24px">
            <FormControl display="flex" alignItems="start">
              <Checkbox
                name="rememberLogin"
                id="remember-login"
                me="10px"
                mt="3px"
                isChecked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                fontWeight="normal"
                // color={textColor}
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
            type="submit"
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
