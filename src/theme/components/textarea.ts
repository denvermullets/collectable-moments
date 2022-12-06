import { mode } from "@chakra-ui/theme-tools";

export const textareaStyles = {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: "8px",
    },
  },

  variants: {
    main: (props) => ({
      bg: mode("transparent", "navy.800")(props),
      border: "1px solid",
      color: mode("purpleMoment.500", "purpleMoment.400")(props),
      borderColor: mode("pinkMoment.100", "whiteAlpha.100")(props),
      borderRadius: "16px",
      fontSize: "sm",
      _placeholder: { color: "secondaryGray.800" },

      _focus: {
        borderColor: mode("pinkMoment.400", "whiteAlpha.100"),
        //   bg: "red",
      },
    }),
  },
};
