import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const inputStyles: StyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    field: {
      color: mode("purpleMoment.100", "darkMode.200")(props),
      bg: mode("purpleMoment.800", "darkMode.900")(props),
      border: "1px solid",
      // TODO: not currently working
      _focus: {
        borderColor: "purpleMoment.500",
      },
    },
  }),

  variants: {},
};
