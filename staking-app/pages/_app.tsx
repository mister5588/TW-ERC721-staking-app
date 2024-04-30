import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Xai } from "@thirdweb-dev/chains";
import type { AppProps } from "next/app";
import "../styles/globals.css";
// This is the chain your dApp will work on.


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={Xai}
      clientId="18360672378d10a824c58a83e95957b6"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
