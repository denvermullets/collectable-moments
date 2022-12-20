import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const textareaStyles: StyleConfig = {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: "8px",
    },
  },

  variants: {
    main: (props: StyleFunctionProps) => ({
      background: mode("transparent", "darkMode.800")(props),
      border: "1px solid",
      color: mode("purpleMoment.800", "darkMode.200")(props),
      borderColor: mode("purpleMoment.100", "darkMode.700")(props),
      borderRadius: "16px",
      fontSize: "sm",
      _placeholder: {
        color: mode("purpleMoment.800", "darkMode.700")(props),
      },
      _focus: {
        borderColor: "purpleMoment.500",
      },
    }),
  },
};
