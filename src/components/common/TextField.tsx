import React from "react";
import { Flex, FormLabel, Textarea, Text } from "@chakra-ui/react";

interface TextFieldProps {
  id?: string;
  label?: string;
  extra?: string;
  placeholder?: string;
  momentChange: (memory: string) => void;
  momentValue: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  extra,
  placeholder,
  momentChange,
  momentValue,
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
        <Text fontSize="sm" fontWeight="normal" ms="2px">
          {extra}
        </Text>
      </FormLabel>
      <Textarea
        id={id}
        placeholder={placeholder}
        h="44px"
        variant="main"
        overflow="hidden"
        onChange={(e) => momentChange(e.target.value)}
        value={momentValue}
        {...rest}
      />
    </Flex>
  );
};

export default TextField;
