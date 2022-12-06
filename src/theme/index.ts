import { extendTheme, theme as base } from "@chakra-ui/react";
import { textareaStyles } from "./components/textarea";
import { buttonStyles } from "./components/button";

import { globalStyles } from "./styles";

const customTheme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
    Button: {
      ...buttonStyles,
    },
    Textarea: {
      ...textareaStyles,
    },
  },
  ...globalStyles,
});

export default customTheme;
