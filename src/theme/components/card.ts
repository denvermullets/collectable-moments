import { mode, StyleConfig } from "@chakra-ui/theme-tools";

export const cardStyles: StyleConfig = {
  baseStyle: {},
  variants: {
    altCard: (props) => ({
      container: {
        borderWidth: "1px",
        borderColor: mode("peachMoment.50", "darkMode.750")(props),
      },
    }),
  },
};
