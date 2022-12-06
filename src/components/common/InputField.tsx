import React from "react";
// Chakra imports
import {
  Flex,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components

interface InputFieldProps {
  id?: string;
  label?: string;
  extra?: JSX.Element;
  placeholder?: string;
  type?: string;
  [x: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  extra,
  placeholder,
  type,
  mb,
  ...rest
}) => {
  // const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  // const bgPrimary = useColorModeValue("transparent", "navy.800");
  // const borderPrimary = useColorModeValue(
  //   "secondaryGray.100",
  //   "whiteAlpha.100"
  // );

  return (
    <Flex direction="column" mb={mb ? mb : "30px"}>
      <FormLabel
        display="flex"
        ms="10px"
        htmlFor={id}
        fontSize="sm"
        // color={textColorPrimary}
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
      >
        {label}
        <Text fontSize="sm" fontWeight="400" ms="2px">
          {extra}
        </Text>
      </FormLabel>
      <Input
        {...rest}
        type={type}
        id={id}
        fontWeight="500"
        variant="main"
        // bg={bgPrimary}
        border="1px solid "
        // borderColor={borderPrimary}
        borderRadius="16px"
        placeholder={placeholder}
        _placeholder={{ fontWeight: "400", color: "secondaryGray.600" }}
        h="44px"
        maxH="44px"
      />
    </Flex>
  );
};

export default InputField;
