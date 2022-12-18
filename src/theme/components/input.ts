import { mode, StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const inputStyles: StyleConfig = {
  baseStyle: {
    field: {
      border: "1px solid",
    },
  },

  variants: {
    authInput: (props: StyleFunctionProps) => ({
      field: {
        color: mode("purpleMoment.300", "darkMode.200")(props),
        background: mode("white", "darkMode.900")(props),
        _focus: {
          borderColor: "purpleMoment.500",
        },
      },
    }),
  },
};
