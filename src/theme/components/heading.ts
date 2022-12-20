import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const momentHeading: StyleConfig = {
  baseStyle: {
    // color: mode("purpleMoment.800", "white"),
  },
  variants: {
    h1: (props: StyleFunctionProps) => ({
      color: mode("purpleMoment.800", "darkMode.200")(props),
    }),
  },
};
