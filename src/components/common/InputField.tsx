import React from "react";
import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";

interface InputFieldProps {
  id?: string;
  label?: string;
  extra?: JSX.Element;
  placeholder?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  extra,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <Flex direction="column" mb={"30px"}>
      <FormLabel
        display="flex"
        ms="10px"
        htmlFor={id}
        fontSize="sm"
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
        border="1px solid "
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
