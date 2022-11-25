import { ModeProvider, useModeContext } from "context";
import { lightTheme, darkTheme, DARK_MODE, LIGHT_MODE } from "theme";

const THEME_DARK_VALUE = darkTheme.palette.background.default;
const THEME_LIGHT_VALUE = lightTheme.palette.background.default;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: LIGHT_MODE,
    values: [
      {
        name: LIGHT_MODE,
        value: THEME_LIGHT_VALUE,
      },
      {
        name: DARK_MODE,
        value: THEME_DARK_VALUE,
      },
    ],
  },
};

const StoryProvider = ({ context, children }) => {
  const { setMode } = useModeContext();
  const currentBackgroundValue = context?.globals?.backgrounds?.value;

  if (currentBackgroundValue === THEME_DARK_VALUE) {
    setMode(DARK_MODE);
  } else {
    setMode(LIGHT_MODE);
  }

  return children;
};

export const decorators = [
  (Story, context) => (
    <ModeProvider>
      <StoryProvider context={context}>
        <Story />
      </StoryProvider>
    </ModeProvider>
  ),
];
