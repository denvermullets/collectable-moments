import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axiosMoment from "../../util/axiosConfig";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type FormDataTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
};

type FormErrorTypes = {
  email: boolean;
  password: boolean;
  username: boolean;
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext<CurrentUserContext>(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrorTypes>({
    email: false,
    password: false,
    username: false,
  });

  const handleClick = () => setShowPassword(!showPassword);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    setFormErrors({
      email: !formData.email || formData.email === "",
      password: !formData.password || formData.password === "",
      username: !formData.username || formData.username === "",
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
      const createAccount = await axiosMoment(null).post("/v1/sign-up", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        password: formData.password,
        email: formData.email,
        username: formData.username,
      });

      if (!createAccount) {
        console.log("unable to create account");
        return;
      }

      setCurrentUser(createAccount.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setFormErrors({
        email: true,
        password: true,
        username: true,
      });
    }
  };

  return (
    <Flex
      w="100%"
      maxW="max-content"
      mx={{ base: "auto", lg: "0px" }}
      me="auto"
      h="100%"
      justifyContent="center"
      mb={{ base: "30px", md: "60px" }}
      px={{ base: "25px", md: "0px" }}
      mt={{ base: "40px", md: "8vh" }}
      flexDirection="column"
    >
      <Box me="auto">
        <Heading as="h1" marginBottom="10px" variant="h1">
          Sign Up
        </Heading>
        <Text mb="36px" ms="4px">
          Enter your email and password to sign up!
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
        <FormControl
          isInvalid={
            formErrors.email || formErrors.password || formErrors.username
          }
        >
          <FormLabel ms="4px" fontSize="sm">
            Email*
          </FormLabel>
          <Input
            variant="authInput"
            id="email"
            name="email"
            value={formData.email}
            isRequired={true}
            fontSize="sm"
            type="email"
            placeholder="email@gmail.com"
            size="lg"
            mb={formErrors.email ? 0 : 8}
            onChange={(e) => handleFormChange(e)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          {formErrors.email && (
            <FormErrorMessage marginBottom={6}>Invalid email</FormErrorMessage>
          )}
          <FormLabel ms="4px" fontSize="sm">
            Username*
          </FormLabel>
          <Input
            variant="authInput"
            name="username"
            id="username"
            value={formData.username}
            isRequired={true}
            fontSize="sm"
            type="text"
            placeholder="UserName"
            mb={formErrors.username ? 0 : 8}
            size="lg"
            onChange={(e) => handleFormChange(e)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          {formErrors.username && (
            <FormErrorMessage marginBottom={6}>
              Invalid username
            </FormErrorMessage>
          )}
          <FormLabel ms="4px" fontSize="sm">
            Password*
          </FormLabel>
          <InputGroup size="md" marginBottom={4}>
            <Input
              variant="authInput"
              name="password"
              id="password"
              value={formData.password}
              isRequired={true}
              fontSize="sm"
              ms={{ base: "0px", md: "4px" }}
              placeholder="Min. 8 characters"
              mb={formErrors.password ? 0 : 8}
              size="lg"
              type={showPassword ? "text" : "password"}
              onChange={(e) => handleFormChange(e)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <InputRightElement display="flex" alignItems="center" mt="4px">
              <Icon
                _hover={{ cursor: "pointer" }}
                as={showPassword ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          {formErrors.password && (
            <FormErrorMessage marginBottom={6}>
              Invalid password
            </FormErrorMessage>
          )}
          <Button
            variant="brand"
            fontSize="14px"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            data-cy="create-account"
            onClick={handleSubmit}
          >
            Create my account
          </Button>
        </FormControl>
        <Flex justifyContent="center" maxW="100%">
          <Text fontSize="sm">
            Already a member?
            <NavLink to="/sign-in">
              <Text as="span" variant="navLinks">
                Sign In
              </Text>
            </NavLink>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
