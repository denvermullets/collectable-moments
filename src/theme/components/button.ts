import { mode, StyleConfig } from "@chakra-ui/theme-tools";

export const buttonStyles: StyleConfig = {
  baseStyle: {
    borderRadius: "16px",
    boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
    transition: ".25s all ease",
    boxSizing: "border-box",
    _focus: {
      boxShadow: "none",
    },
    _active: {
      boxShadow: "none",
    },
  },
  variants: {
    outline: () => ({
      borderRadius: "16px",
    }),
    brand: (props) => ({
      bg: mode("purpleMoment.500", "purpleMoment.600")(props),
      color: "white",
      _focus: {
        bg: mode("purpleMoment.500", "purpleMoment.600")(props),
      },
      _active: {
        bg: mode("purpleMoment.500", "purpleMoment.400")(props),
      },
      _hover: {
        bg: mode("purpleMoment.600", "purpleMoment.400")(props),
      },
    }),
  },
};
