import { extendTheme, theme as base } from "@chakra-ui/react";
import { textareaStyles } from "./components/textarea";
import { buttonStyles } from "./components/button";

import { globalStyles } from "./styles";
import { momentText } from "./components/text";
import { momentLabel } from "./components/formLabel";
import { momentHeading } from "./components/heading";

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
