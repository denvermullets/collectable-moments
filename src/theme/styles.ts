import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    purpleMoment: {
      50: "#f8f7fb",
      100: "#e3ddef",
      200: "#cbc1e2",
      300: "#ae9ed1",
      400: "#9e8ac8",
      // 500 is base color
      500: "#937DC2",
      600: "#716196",
      700: "#5b4d78",
      800: "#4d4165",
      900: "#372f49",
    },
    pinkPurpleMoment: {
      50: "#fbf6fb",
      100: "#eddaed",
      200: "#debbde",
      // 300 is base color
      300: "#C689C6",
      400: "#ba81ba",
      500: "#9d6d9d",
      600: "#845c84",
      700: "#6a496a",
      800: "#5a3e5a",
      900: "#412d41",
    },
    pinkMoment: {
      50: "#fdf5f9",
      100: "#f6d9e5",
      // 200 is base color
      200: "#E8A0BF",
      300: "#d593af",
      400: "#be839d",
      500: "#a06f84",
      600: "#875d6f",
      700: "#6c4b59",
      800: "#5c3f4b",
      900: "#422e36",
    },
    peachMoment: {
      50: "#fef5f4",
      100: "#fdd8d4",
      // 200 is base color
      200: "#FCC5C0",
      300: "#c79b98",
      400: "#b28b87",
      500: "#967572",
      600: "#7e6360",
      700: "#654f4d",
      800: "#564341",
      900: "#3e302f",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("pinkMoment.50", "navy.900")(props),
        // fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      // html: {
      //   fontFamily: "DM Sans",
      // },
    }),
  },
};
