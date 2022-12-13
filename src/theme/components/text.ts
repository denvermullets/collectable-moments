import { mode } from "@chakra-ui/theme-tools";

export const momentText = {
  baseStyle: {
    color: mode("purpleMoment.800", "white"),
  },
  variants: {
    navLinks: {
      color: mode("purpleMoment.900", "white"),
      marginLeft: "5px",
      fontWeight: "800",
    },
  },
};
