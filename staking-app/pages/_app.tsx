import { ThirdwebProvider } from "@thirdweb-dev/react";
import { defineChain } from "thirdweb";
export const CHAIN = defineChain(660279)
import type { AppProps } from "next/app";
import "../styles/globals.css";
// This is the chain your dApp will work on.
const activeChain = CHAIN;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
