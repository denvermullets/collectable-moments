import { extendTheme, theme as base, ThemeConfig } from "@chakra-ui/react";
import { textareaStyles } from "./components/textarea";
import { buttonStyles } from "./components/button";

import { globalStyles } from "./styles";
import { momentText } from "./components/text";
import { momentLabel } from "./components/formLabel";
import { momentHeading } from "./components/heading";
import { inputStyles } from "./components/input";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const customTheme = extendTheme({
  config,
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
    Button: {
      ...buttonStyles,
    },
    Input: {
      ...inputStyles,
    },
    Textarea: {
      ...textareaStyles,
    },
    Text: {
      ...momentText,
    },
    FormLabel: {
      ...momentLabel,
    },
    Heading: {
      ...momentHeading,
    },
  },
  ...globalStyles,
});

export default customTheme;
