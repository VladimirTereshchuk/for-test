import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import { AuthProvider } from "@/lib/auth";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
