import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const momentLabel: StyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode("purpleMoment.800", "darkMode.200")(props),
  }),
  variants: {},
};
