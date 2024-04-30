import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Xai } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
const activeChain = "Xai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientID="18360672378d10a824c58a83e95957b6">
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
